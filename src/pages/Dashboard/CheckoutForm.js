import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const { _id, price, orderQuantity, user, email } = order;

  useEffect(() => {
    const totalCost = price * orderQuantity;
    fetch("https://power-wheels-ltd.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ totalCost }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price, orderQuantity]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      toast.error(error.message);
      setSuccess("");
    } else {
      setProcessing(true);
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      toast.error(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent?.id);
      console.log(paymentIntent);
      setSuccess("Successful");
      toast.success("Congratulations, Payment Successful!");

      const payment = {
        order: _id,
        user: user,
        email: email,
        amount: price * orderQuantity,
        transactionId: paymentIntent?.id,
      };

      console.log(payment);

      const url = `https://power-wheels-ltd.herokuapp.com/orders/${_id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };

  if (processing) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div>
        {transactionId && (
          <p className="font-font text-xl my-5">
            Order Transaction ID:{" "}
            <span className="text-green-700">
              {transactionId || "Not Available"}
            </span>
          </p>
        )}
        {cardError && <p className="text-red-700 my-5">{cardError}</p>}
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-success btn-sm my-5 px-5 rounded"
            type="submit"
            disabled={!stripe || !clientSecret || success}
          >
            Pay
          </button>
          {success && (
            <Link
              className="btn btn-primary btn-sm mx-5"
              to="/dashboard/myOrders"
            >
              Back to Dashboard
            </Link>
          )}
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;

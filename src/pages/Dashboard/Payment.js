import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L15UzHV7MVM9BNLOXryqdXkftGRYRa9fRDrKEXzZnw54jYTucKFjsGAbezDquxD4sZeLmWJFxKOPNLrtHvtWUj700eBFKXNrA"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      {!order ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <>
          <div>
            <section className="mt-10">
              <div className="p-5 border border-primary shadow-lg w-fit mx-auto text-xl rounded text-left">
                <h4 className="text-xl font-bold">
                  Hello, <span className="text-secondary "> {order.user}</span>
                </h4>
                <h4 className="text-xl font-bold">
                  Please pay for {order.productName}
                </h4>
                <p>Price/unit: {order.price}</p>
                <p>Order Quantity: {order.orderQuantity}</p>
                <p>
                  Total Amount:{" "}
                  <span className="text-red-700">
                    ${order.price * order.orderQuantity}
                  </span>
                </p>
              </div>
            </section>
            <section>
              <div className="p-5 border border-primary shadow-lg w-full lg:w-1/2 mx-auto text-xl rounded text-left my-10">
                <div className="mb-5">Payment Gateway</div>
                <div>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                  </Elements>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Payment;

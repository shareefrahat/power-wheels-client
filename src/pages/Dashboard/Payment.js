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

  const url = `https://power-wheels-ltd.herokuapp.com/order/${id}`;
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
            <section className="my-10">
              <h4 className="text-2xl lg:text-3xl mb-2 font-primary">
                Payment Gateway
              </h4>
            </section>
            <section className="mt-10 font-secondary">
              <div className="p-5 border border-primary shadow-lg w-fit mx-auto rounded text-left text-xl lg:text-2xl">
                <h4 className="text-2xl lg:text-3xl mb-5">
                  Hello, <span className="font-primary"> {order.user}</span>
                </h4>
                <h4>
                  Please Pay for{" "}
                  <span className="font-semibold">{order.productName}</span>
                </h4>
                <p>Price: ${order.price} /unit</p>
                <p>Ordered Quantity: {order.orderQuantity} Pcs</p>
                <p className="mt-5">
                  Total Amount:{" "}
                  <span className="text-red-700">
                    ${order.price * order.orderQuantity}
                  </span>
                </p>
              </div>
            </section>
            <section className="mx-5 lg:mx-auto">
              <div className="p-5 border border-primary shadow-lg w-full mx-auto lg:w-1/2 lg:mx-auto text-xl rounded text-left my-10 font-secondary">
                <div className="mb-5 text-lg lg:text-xl font-primary">
                  Payment Card
                </div>
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

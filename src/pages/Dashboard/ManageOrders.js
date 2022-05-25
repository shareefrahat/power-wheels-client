import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const ManageOrders = () => {
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery("orders", () =>
    fetch(`https://power-wheels-ltd.herokuapp.com/orders`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleShipped = (id) => {
    const url = `https://power-wheels-ltd.herokuapp.com/orders?id=${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Order Successfully Shipped");
      });
  };
  return (
    <>
      {!orders ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <>
          <div>
            <section className="my-10">
              <h4 className="text-2xl lg:text-3xl mb-2 font-primary">
                All Orders Data
              </h4>
              <h4 className="text-lg lg:text-xl">
                Total Orders: {orders.length} Items
              </h4>
            </section>
            <section className="my-10 mx-4 border-2 border-primary rounded">
              <div class="overflow-x-auto">
                <table class="table w-full">
                  <thead>
                    <tr>
                      <th>S/L</th>
                      <th>Product Name</th>
                      <th>Order Quantity</th>
                      <th>Customer Info</th>
                      <th>Payment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.map((order, index) => (
                      <tr key={order._id}>
                        <th>{index + 1}</th>
                        <td>{order.productName}</td>
                        <td>{order.orderQuantity}</td>
                        <td>
                          Name: {order.user} <br /> Email: {order.email} <br />
                          Phone: {order.phone} <br /> Address: {order.address}
                        </td>
                        <td>
                          {order.paid ? (
                            <span className="text-green-700 font-bold">
                              Paid
                            </span>
                          ) : (
                            <span className="text-red-700 font-bold">
                              Unpaid
                            </span>
                          )}
                        </td>
                        <td>
                          {order.status === "pending" ? (
                            <button
                              onClick={() => handleShipped(order._id)}
                              class="btn btn-primary btn-xs text-white"
                              disabled={!order.paid}
                            >
                              Shipped
                            </button>
                          ) : (
                            <>
                              <CheckCircleIcon className="w-5 inline mx-2 text-green-700"></CheckCircleIcon>{" "}
                              <span className="text-green-700 font-bold">
                                {" "}
                                Shipped
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default ManageOrders;

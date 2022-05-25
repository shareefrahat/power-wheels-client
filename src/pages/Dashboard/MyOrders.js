import { CheckCircleIcon } from "@heroicons/react/solid";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import CancelModal from "./CancelModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [cancelingProduct, setCancelingProduct] = useState(null);
  const navigate = useNavigate();
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery(["orders", user], () =>
    fetch(`http://localhost:5000/orders/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
        console.log(res);
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleCopy = (tId) => {
    navigator.clipboard.writeText(tId);
    toast.success("Transaction id copied");
  };

  return (
    <>
      {!orders ? (
        <Loading></Loading>
      ) : (
        <div>
          <section className="my-10">
            <h4 className="text-xl">User: {user?.email}</h4>
            <h4 className="text-xl">Total Orders: {orders.length} Items</h4>
          </section>
          <section className="my-10 mx-4 border-2 border-primary rounded">
            <div class="overflow-x-auto">
              <table class="table w-full">
                <thead>
                  <tr>
                    <th>S/L</th>
                    <th>Product Name</th>
                    <th>Price/unit</th>
                    <th>Order Quantity</th>
                    <th>Total Cost</th>
                    <th>Action</th>
                    <th>Payment</th>
                    <th>Transaction ID</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((order, index) => (
                    <>
                      <tr key={order._id}>
                        <th>{index + 1}</th>
                        <td>{order?.productName}</td>
                        <td>${order?.price}</td>
                        <td>{order?.orderQuantity}</td>
                        <td>${order?.price * order?.orderQuantity}</td>
                        <th>
                          {!order?.paid ? (
                            <>
                              <label
                                onClick={() => setCancelingProduct(order)}
                                for="cancel-modal"
                                class="btn btn-error btn-xs text-white"
                              >
                                Cancel
                              </label>
                            </>
                          ) : (
                            <button className="btn btn-xs btn-disabled">
                              cancel
                            </button>
                          )}
                        </th>
                        <td>
                          {order.price && !order.paid ? (
                            <Link to={`/dashboard/payment/${order._id}`}>
                              <button className="btn btn-xs btn-primary">
                                Pay
                              </button>
                            </Link>
                          ) : (
                            <p>
                              <span className="btn btn-xs btn-success">
                                Paid
                              </span>
                            </p>
                          )}
                        </td>
                        <td>
                          {order?.transactionId ? (
                            <button
                              onClick={() => handleCopy(order?.transactionId)}
                              className="btn btn-secondary btn-xs"
                            >
                              Copy TID
                            </button>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td>
                          {order?.status === "shipped" ? (
                            <>
                              <CheckCircleIcon className="w-5 inline mx-2 text-green-700"></CheckCircleIcon>{" "}
                              <span className="text-green-700 font-bold">
                                {" "}
                                Shipped
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-red-700 font-bold">
                                {" "}
                                Pending
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            {cancelingProduct && (
              <CancelModal
                cancelingProduct={cancelingProduct}
                refetch={refetch}
                setCancelingProduct={setCancelingProduct}
              ></CancelModal>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default MyOrders;

import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import CancelModal from "./CancelModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [cancelingProduct, setCancelingProduct] = useState(null);
  const navigate = useNavigate();

  console.log(user.email);
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery("orders", () =>
    fetch(
      `https://power-wheels-ltd.herokuapp.com/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
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

  console.log(orders);

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
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((order, index) => (
                    <>
                      <tr key={order._id}>
                        <th>{index + 1}</th>
                        <td>{order.productName}</td>
                        <td>${order.price}</td>
                        <td>{order.orderQuantity}</td>
                        <td>${order.price * order.orderQuantity}</td>
                        <th>
                          {!order.paid && (
                            <>
                              <label
                                onClick={() => setCancelingProduct(order)}
                                for="cancel-modal"
                                class="btn btn-error btn-xs text-white"
                                disabled={order?.paid && true}
                              >
                                Cancel
                              </label>
                            </>
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
                        <td>{order.transactionId || "N/A"}</td>
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

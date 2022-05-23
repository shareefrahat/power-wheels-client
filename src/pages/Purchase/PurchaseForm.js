import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseForm = ({ product }) => {
  const [user] = useAuthState(auth);
  const { _id, name, available, minOrder } = product;
  let [order, setOrder] = useState({
    productId: _id,
    productName: name,
    orderQuantity: available,
    user: user?.displayName,
    email: user?.email,
    address: user?.address || "",
    phone: user?.phone || 0,
  });

  const handleQuantity = (e) => {
    const { orderQuantity, ...rest } = order;
    const newQuantity = parseInt(e.target.value);
    const newOrderQuantity = { orderQuantity: newQuantity, ...rest };
    setOrder(newOrderQuantity);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (order.orderQuantity < minOrder || order.orderQuantity > available) {
      toast.error(`Min order: ${minOrder} Max Order: ${available}`);
      return;
    }
    console.log(order);
    toast.success(`Order Successfully Placed for ${name}`);
    // navigate("/dashboard/myOrders")

    // const url = `https://electron-valley.herokuapp.com/update/${_id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(update),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.modifiedCount !== 0) {
    //       toast.success("Information Updated!", { id: "infoUpdated" });
    //     }
    //   });
  };

  return (
    <>
      <div className="border border-blue-700 rounded p-5">
        <div>
          <h2 className="text-lg lg:text-xl font-semibold font-serif text-blue-700 border border-blue-700 py-2 rounded mb-10">
            Order Placement
          </h2>
        </div>
        <form onSubmit={handleOrder} className="text-left w-full mx-auto ">
          <div className="mb-6">
            <p>{name}</p>
          </div>
          <div className="mb-6 flex flex-row justify-between items-end">
            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Quantity
              </label>
              <input
                onChange={handleQuantity}
                type="number"
                id="quantity"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={order.orderQuantity}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Place Order
          </button>
        </form>
      </div>
    </>
  );
};

export default PurchaseForm;

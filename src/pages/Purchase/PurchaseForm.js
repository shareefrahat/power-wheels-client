import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseForm = ({ product }) => {
  const [user] = useAuthState(auth);
  const { _id, name, img, price, available, minOrder, description } = product;
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
      <div className="border border-accent rounded p-5 w-fit mx-auto">
        <div>
          <h2 className="text-lg lg:text-xl font-bold font-secondary text-accent border border-accent py-2 rounded mb-10">
            Order Placement
          </h2>
        </div>
        <form
          onSubmit={handleOrder}
          className="text-left w-full mx-auto font-secondary"
        >
          <div className="mb-6">
            <div className="flex flex-row justify-center items-center gap-4 font-secondary">
              <div>
                <img
                  className="w-32 rounded mx-auto border-2 border-primary"
                  src={img}
                  alt=""
                />
              </div>
              <div className="font-semibold">
                <p className="text-2xl font-primary font-normal mb-2">{name}</p>
                <p className="mb-2">
                  Price: <span className="text-red-700">${price}</span>
                  /Unit
                </p>
                <p className="mb-2">
                  Minimum Order:{" "}
                  <span className="text-red-700">{minOrder}</span> Pcs
                </p>
                <p>
                  Available: <span className="text-red-700">{available}</span>{" "}
                  Pcs
                </p>
              </div>
            </div>
            <div className="w-[350px] text-justify my-5">
              <p>{description}</p>
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-md font-medium text-gray-900 "
              >
                Order Quantity
              </label>
              <input
                onChange={handleQuantity}
                type="number"
                id="quantity"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
                value={order.orderQuantity}
                required
              />
            </div>
            <div className="divider my-10 font-semibold">Customer Info</div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full font-secondary font-bold"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </>
  );
};

export default PurchaseForm;

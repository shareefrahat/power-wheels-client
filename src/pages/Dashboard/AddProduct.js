import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
    const price = Number(e.target.price.value);
    const available = parseInt(e.target.available.value);
    const minOrder = parseInt(e.target.orderQuantity.value);
    const description = e.target.details.value;

    if (price <= 0) {
      toast.error("Invalid amount of price", { id: "priceToast" });
      return;
    }
    if (minOrder <= 0 || minOrder > available) {
      toast.error("Invalid amount of order quantity", { id: "quantityToast" });
      return;
    }
    const product = {
      name,
      img,
      price,
      minOrder,
      available,
      description,
    };

    fetch("https://power-wheels-ltd.herokuapp.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          toast.success("Products successfully added", { id: "successToast" });
          e.target.reset();
        } else {
          toast.error("Something went wrong!", { id: "errorToast" });
        }
      });
  };

  return (
    <>
      <section>
        <h2 className="text-2xl lg:text-3xl font-primary mt-10">
          Add a new product
        </h2>
        <p className="text-lg lg:text-xl my-2">Admin: {user?.displayName}</p>
      </section>
      <section className="font-secondary">
        <div className="shadow-md rounded-md border border-primary p-5 text-left  mx-auto w-fit lg:w-1/2 my-10">
          <form onSubmit={handleOnSubmit}>
            <div className="mb-6">
              <label
                htmlFor="event-name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="event-name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Name of new product"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="img-link"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Image Link
              </label>
              <input
                type="text"
                id="img-link"
                name="img"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Paste image link here"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                placeholder="Product price"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="available"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Available Quantity
              </label>
              <input
                type="number"
                id="available"
                name="available"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Available Quantity"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="order-quantity"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Min Order Quantity
              </label>
              <input
                type="number"
                id="order-quantity"
                name="orderQuantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Minimum Order Quantity"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="details"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Description
              </label>
              <textarea
                id="details"
                name="details"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Product Details..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-md w-full">
              Save Product
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;

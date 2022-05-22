import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, img, price, supplier, quantity, description } = product;
  return (
    <>
      <div
        className="relative shadow-md bg-white mx-auto w-fit h-full rounded-md border border-slate-300
      "
      >
        <div className="border-b border-b-slate-300">
          <img
            className="w-[200px] h-[200px] mx-auto rounded-md p-4"
            src={img}
            alt=""
          />
        </div>
        <div className="w-[300px] h-[250px] mx-auto p-4 overflow-hidden">
          <div className="flex flex-row justify-between items-center">
            <p className="text-md lg:text-xl text-slate-600">{supplier}</p>
            <p className="text-md lg:text-xl  text-slate-500">
              <span className="text-red-700 font-semibold">${price}</span>
              /Unit
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 my-4">
            <p className="text-lg lg:text-xl font-semibold text-slate-700">
              {name}
            </p>

            <p className="text-md lg:text-xl text-slate-600">
              Stock: <span className="text-blue-700">{quantity}</span>
            </p>
            <p className=" mx-auto text-justify text-lg relative overflow-ellipsis font-serif">
              {description}
            </p>
          </div>
        </div>
        <div className="m-4">
          <Link
            to={`/purchase/${_id}`}
            className="w-full block py-1 rounded-md lg:text-xl bg-blue-700 hover:text-white text-white hover:bg-blue-700 border-slate-300 border-t transition duration-300 hover:-translate-x-1 hover:scale-90"
          >
            Purchase
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

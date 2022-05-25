import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, img, price, minOrder, available, description } = product;
  return (
    <>
      <div
        className="shadow-md bg-white mx-auto w-fit h-full rounded-md border border-slate-300 font-secondary
      "
      >
        <div className="border-b border-b-slate-300">
          <img
            className="w-[200px] h-[200px] mx-auto rounded-md p-4"
            src={img}
            alt=""
          />
        </div>
        <div className="w-[300px] h-fit mx-auto p-4 overflow-hidden">
          <p className="text-lg lg:text-xl mb-3 font-semibold text-slate-700">
            {name}
          </p>
          <p className=" mx-auto text-justify text-lg h-16 overflow-ellipsis">
            {description}
          </p>
        </div>
        <div className="flex flex-row justify-evenly mt-4">
          <div>
            <p className="text-red-700 font-bold">${price}</p>
            <p>Price</p>
          </div>
          <div>
            <p className="font-bold">{minOrder}</p>
            <p>Min Order</p>
          </div>
          <div>
            <p className="text-green-700 font-bold">{available}</p>
            <p>Available</p>
          </div>
        </div>
        <div className="m-4">
          <Link
            to={`/purchase/${_id}`}
            className="w-full btn btn-sm btn-primary"
          >
            Purchase
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

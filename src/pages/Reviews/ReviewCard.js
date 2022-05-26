import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import quote from "../../images/quote.png";

const ReviewCard = ({ review }) => {
  const { details, img, name, rating } = review;

  let userRating;
  if (rating === 1) {
    userRating = (
      <>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
      </>
    );
  } else if (rating === 2) {
    userRating = (
      <>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
      </>
    );
  } else if (rating === 3) {
    userRating = (
      <>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
      </>
    );
  } else if (rating === 4) {
    userRating = (
      <>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
      </>
    );
  } else {
    userRating = (
      <>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
        <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
      </>
    );
  }
  return (
    <>
      <div>
        <div className="border border-slate-300 rounded-md py-5 shadow-sm h-full">
          <div className="px-4 h-[180px]">
            <img src={quote} className="w-8 mr-auto" alt="" />
            <p className="font-secondary text-gray-700 text text-justify">
              {details}
            </p>
          </div>
          <div>
            <div class="avatar divider my-10">
              <div class="w-48 rounded-full border-2 border-slate-700">
                <img src={img} alt="" />
              </div>
            </div>
            <p className="text-xl font-primary">{name}</p>
            <div class="mt-2 ">{userRating}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;

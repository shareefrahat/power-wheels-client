import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import qoute from "../../images/quote.png";

const Reviews = () => {
  return (
    <>
      <section>
        <h2 class="divider text-2xl lg:text-4xl font-semibold font-primary">
          Clients Feedback
        </h2>
        <p className="text-xl lg:text-2xl font-secondary mt-5">
          What our client say!
        </p>
      </section>

      <section className="mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-y-10 gap-x-20 w-fit mx-auto mt-10">
          <div className="border border-slate-300 rounded-md py-5 shadow-sm">
            <div className="px-4">
              <img src={qoute} className="w-8 mr-auto" alt="" />
              <p className="font-secondary text-gray-500 text text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                consequatur suscipit accusantium alias sunt. Non veniam dolorem
                provident nihil aliquam.
              </p>
            </div>
            <div>
              <div class="avatar divider my-10">
                <div class="w-48 rounded-full border-2 border-slate-700">
                  <img
                    src="https://api.lorem.space/image/face?hash=92310"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-xl font-primary">User Name</p>
              <div class="mt-2 ">
                <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
                <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
                <StarIcon className="w-6 mx-auto inline-block text-orange-400"></StarIcon>
                <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
                <StarIcon className="w-6 mx-auto inline-block text-slate-300"></StarIcon>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;

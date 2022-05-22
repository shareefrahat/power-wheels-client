import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-center bg-primary py-10 gap-y-10">
        <div>
          <h2 className="text-accent text-2xl lg:text-4xl font-primary font-semibold">
            Subscribe Our Newsletter
          </h2>
        </div>
        <div>
          <div class="form-control">
            <div class="input-group">
              <input
                type="text"
                placeholder="Your email.."
                class="input input-bordered"
              />
              <button class="bg-accent px-4 font-secondary text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;

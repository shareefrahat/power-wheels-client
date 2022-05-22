import {
  CurrencyDollarIcon,
  RssIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import React from "react";

const Summary = () => {
  return (
    <>
      <section>
        <div class="divider text-2xl lg:text-4xl font-semibold font-primary">
          Current Stats
        </div>
      </section>
      <section>
        <p className="text-xl lg:text-2xl font-secondary mt-5">
          Business Summary In A Nutshell!
        </p>
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-y-10 gap-x-40 w-fit mx-auto mt-10">
          <div className="flex fle-row gap-4 border border-slate-300 rounded-md p-5 shadow-sm">
            <div>
              <UserGroupIcon className="w-28 lg:w-32 text-secondary mx-auto"></UserGroupIcon>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-primary mt-5">120+</p>
              <p className="text-xl lg:text-2xl font-primary text-slate-500 mt-2">
                Happy Clients
              </p>
            </div>
          </div>
          <div className="flex fle-row gap-4 border border-slate-300 rounded-md p-5 shadow-sm">
            <div>
              <CurrencyDollarIcon className="w-28 lg:w-32 text-[#eb3b5a] mx-auto"></CurrencyDollarIcon>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-primary mt-5">34M+</p>
              <p className="text-xl lg:text-2xl font-primary text-slate-500 mt-2">
                Annual Revenue
              </p>
            </div>
          </div>
          <div className="flex fle-row gap-4 border border-slate-300 rounded-md p-5 shadow-sm">
            <div>
              <RssIcon className="w-28 lg:w-32 text-[#8854d0] mx-auto"></RssIcon>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-primary mt-5">52K+</p>
              <p className="text-xl lg:text-2xl font-primary text-slate-500 mt-2">
                Total Feedbacks
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Summary;

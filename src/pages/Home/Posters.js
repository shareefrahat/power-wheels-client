import React from "react";
import poster1 from "../../images/poster1.png";
import poster2 from "../../images/poster2.png";
import poster3 from "../../images/poster3.png";

const Posters = () => {
  return (
    <>
      <section className="mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-y-10 gap-x-20 w-fit mx-auto mt-10">
          <div
            style={{
              backgroundImage: `url(${poster1})`,
              backgroundRepeat: "none",
            }}
            className="flex flex-row justify-between items-center bg-cover h-[200px] lg:h-[280px] w-[300px] lg:w-[400px] rounded"
          >
            <div></div>
            <div className="text-left mr-10 font-primary text-xl lg:text-2xl">
              <h5 className="text-2xl lg:text-4xl font-bold">
                Wheels <br />
                Collection
              </h5>
              <button className="bg-white px-4 py-1 mt-5 rounded hover:text-primary">
                Buy Now
              </button>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${poster2})`,
              backgroundRepeat: "none",
            }}
            className="flex flex-row justify-between items-center bg-cover h-[200px] lg:h-[280px] w-[300px] lg:w-[400px] rounded"
          >
            <div></div>
            <div className="text-left mr-10 font-primary text-xl lg:text-2xl">
              <h5 className="text-2xl lg:text-4xl font-bold">
                New <br />
                Suspensions
              </h5>
              <button className="bg-white px-4 py-1 mt-5 rounded hover:text-primary">
                Buy Now
              </button>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${poster3})`,
              backgroundRepeat: "none",
            }}
            className="flex flex-row justify-between items-center bg-cover h-[200px] lg:h-[280px] w-[300px] lg:w-[400px] rounded"
          >
            <div></div>
            <div className="text-left mr-10 font-primary text-xl lg:text-2xl">
              <h5 className="text-2xl lg:text-4xl font-bold">
                Safety <br />
                Collection
              </h5>
              <button className="bg-white px-4 py-1 mt-5 rounded hover:text-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posters;

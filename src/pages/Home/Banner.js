import React from "react";
import slider1 from "../../images/slider1.jpg";

const Banner = () => {
  return (
    <>
      <div className="border-b border-primary">
        <img src={slider1} className="h-full lg:h-[500px] w-full" alt="" />
      </div>
    </>
  );
};

export default Banner;

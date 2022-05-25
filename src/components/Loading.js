import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <div className="my-20 relative -z-50">
        <PulseLoader color="#f7b731" loading={true} size={20} />
      </div>
    </>
  );
};

export default Loading;

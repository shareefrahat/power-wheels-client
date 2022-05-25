import { HomeIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const NotFound = () => {
  return (
    <>
      <section className="h-screen font-secondary">
        <div className="p-5 flex flex-col gap-5 mt-10">
          <h4 className="text-2xl lg:text-3xl text-red-700 font-primary">
            Oops! Wrong Route!
          </h4>
          <div className="my-20 relative -z-50">
            <ClimbingBoxLoader color="#f7b731" loading={true} size={20} />
          </div>
          <p className="text-xl">
            Your route
            <span className="text-red-600">
              "{window.location.pathname}"
            </span>{" "}
            is not found!
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="bg-primary px-4 py-2 text-accent text-md lg:text-xl rounded"
          >
            <HomeIcon className="w-6 text-accent inline-block mr-2"></HomeIcon>{" "}
            Back To Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;

import React from "react";
import Loading from "../../components/Loading";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <>
      {!reviews.length ? (
        <Loading></Loading>
      ) : (
        <div className="m-10">
          <section>
            <h2 className="text-2xl lg:text-3xl font-primary my-10">
              Clients Feedbacks
            </h2>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-y-10 gap-x-20 w-fit mx-auto mt-10">
            {reviews.map((review) => (
              <ReviewCard key={review._id} review={review}></ReviewCard>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default Reviews;

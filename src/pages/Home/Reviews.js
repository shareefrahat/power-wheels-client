import React from "react";
import Loading from "../../components/Loading";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../Reviews/ReviewCard";

const Reviews = () => {
  const [reviews] = useReviews();
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
        {!reviews ? (
          <Loading></Loading>
        ) : (
          <div>
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-y-10 gap-x-20 w-fit mx-auto mt-10">
              {reviews.slice(0, 3).map((review) => (
                <ReviewCard key={review._id} review={review}></ReviewCard>
              ))}
            </section>
          </div>
        )}
      </section>
    </>
  );
};

export default Reviews;

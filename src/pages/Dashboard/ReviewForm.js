import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import avatar from "../../images/user.png";

const ReviewForm = ({ review, refetch }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate("");
  const { rating, details } = review;

  let [updateReview, setUpdateReview] = useState({
    rating: rating,
    details: details,
    name: user.displayName,
    email: user.email,
    img: user.photoURL || avatar,
  });

  const handleDetails = (e) => {
    const { details, ...rest } = updateReview;
    const newDetails = e.target.value;
    const updateDetails = { details: newDetails, ...rest };
    setUpdateReview(updateDetails);
  };

  const handleRating = (e) => {
    const { rating, ...rest } = updateReview;
    const newRating = Number(e.target.value);
    const updateDetails = { rating: newRating, ...rest };
    setUpdateReview(updateDetails);
  };

  const handleReview = (e) => {
    e.preventDefault();
    if (updateReview.details.length > 250) {
      toast.error("Details must be within 250 character");
      return;
    }
    const url = `http://localhost:5000/reviews/${user?.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateReview),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success(`Review Successfully Added`);
        refetch();
        navigate("/reviews");
      });
  };
  return (
    <>
      <div className="border-2 border-primary rounded w-full lg:w-1/2 p-5 mx-5 lg:mx-auto">
        <form
          onSubmit={handleReview}
          className="text-left w-full mx-auto font-secondary"
        >
          <div className="mb-6">
            <div className="flex flex-col gap-3">
              <p>Name: {user?.displayName}</p>
              <p>
                Rating:
                <select
                  onChange={handleRating}
                  name="rating"
                  class="select select-bordered w-fit max-w-xs ml-4"
                  value={updateReview.rating}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </p>
              <p>
                Details:
                <textarea
                  onChange={handleDetails}
                  id=""
                  name="phone"
                  rows="4"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
                  value={updateReview.details}
                  required
                />
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full font-secondary font-bold"
          >
            Submit Review
          </button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;

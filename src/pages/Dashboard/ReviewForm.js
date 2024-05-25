import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import avatar from "../../images/user.png";

const ReviewForm = ({ review, refetch }) => {
  const [currentUser] = useAuthState(auth);
  const navigate = useNavigate("");
  const { rating, details } = review;

  const { data: user } = useQuery("user", () =>
    fetch(`https://power-wheels-server.onrender.com/user/${currentUser?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  let [updateReview, setUpdateReview] = useState({
    rating: rating,
    details: details,
    name: currentUser.displayName,
    email: currentUser.email,
    img: currentUser.photoURL || user?.img,
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
    refetch();
    e.preventDefault();
    const { img, ...rest } = updateReview;
    const newImg = user.img || avatar;
    const updateImg = { img: newImg, ...rest };
    setUpdateReview(updateImg);

    if (updateReview.details.length > 250) {
      toast.error("Details must be within 250 character");
      return;
    }
    const url = `https://power-wheels-server.onrender.com/reviews/${currentUser?.email}`;
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
        toast.success(`Review Successfully Added`);
        refetch();
        navigate("/reviews");
      });
  };
  return (
    <>
      <div className="border-2 border-primary rounded w-full lg:w-1/2 p-5 mx-auto">
        <form
          onSubmit={handleReview}
          className="text-left w-full mx-auto font-secondary"
        >
          <div className="mb-6">
            <div className="flex flex-col gap-3">
              <p>Name: {currentUser?.displayName}</p>
              <p>
                Rating:
                <select
                  onChange={handleRating}
                  name="rating"
                  class="select select-bordered w-fit max-w-xs ml-4"
                  value={updateReview?.rating}
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
                  value={updateReview?.details}
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

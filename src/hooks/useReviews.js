import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://power-wheels-ltd.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
  }, [reviews]);
  return [reviews];
};

export default useReviews;

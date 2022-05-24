import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import ReviewForm from "./ReviewForm";

const AddReview = () => {
  const [user] = useAuthState(auth);

  const url = `http://localhost:5000/reviews/${user?.email}`;

  const { data: review, isLoading } = useQuery(["review", url], () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <section className="my-10">
        <h4 className="text-xl">Add Review</h4>
        <h4 className="text-xl">
          A user can add a single review and can update anytime he/she want
        </h4>
      </section>
      <section>
        <ReviewForm key={review._id} review={review}></ReviewForm>
      </section>
    </>
  );
};

export default AddReview;

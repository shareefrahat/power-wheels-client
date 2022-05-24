import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import ReviewForm from "./ReviewForm";

const AddReview = () => {
  const [user] = useAuthState(auth);

  const url = `http://localhost:5000/reviews/${user?.email}`;

  const placeholder = { id: 1, details: "Write here...", rating: 5 };

  const {
    data: review,
    refetch,
    isLoading,
  } = useQuery(["review", url], () =>
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
        <ReviewForm
          refetch={refetch}
          review={review || placeholder}
        ></ReviewForm>
      </section>
    </>
  );
};

export default AddReview;

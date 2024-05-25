import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import ReviewForm from "./ReviewForm";

const AddReview = () => {
  const [user] = useAuthState(auth);

  const url = `https://power-wheels-server.onrender.com/reviews/${user?.email}`;

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
        <h4 className="text-2xl lg:text-3xl font-primary">Add Review</h4>
        <div class="alert w-fit lg:w-1/2 mx-5 lg:mx-auto text-left font-secondary my-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-accent flex-shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              {" "}
              N.B: A user can add a single review. In the form below it will
              show user's current review and user can update anytime from here.
            </span>
          </div>
        </div>
      </section>
      <section className="px-5 font-secondary">
        <ReviewForm
          refetch={refetch}
          review={review || placeholder}
        ></ReviewForm>
      </section>
    </>
  );
};

export default AddReview;

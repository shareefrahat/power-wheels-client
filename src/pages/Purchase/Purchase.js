import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";
import PurchaseForm from "./PurchaseForm";

const Purchase = () => {
  const [currentUser] = useAuthState(auth);
  const [products] = useProducts();

  const { id } = useParams();
  const selectedProduct = products?.find((product) => product._id === id);

  const email = currentUser?.email;
  const { data: user } = useQuery("user", () =>
    fetch(`http://localhost:5000/user/${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return (
    <div>
      <section>
        {!selectedProduct ? (
          <Loading></Loading>
        ) : (
          <>
            <div className="my-10">
              <PurchaseForm
                key={selectedProduct._id}
                product={selectedProduct}
                user={user}
              ></PurchaseForm>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Purchase;

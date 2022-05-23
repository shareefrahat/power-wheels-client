import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import useProducts from "../../hooks/useProducts";
import PurchaseForm from "./PurchaseForm";

const Purchase = () => {
  const [products] = useProducts();
  const { id } = useParams();

  const selectedProduct = products?.find((product) => product._id === id);

  return (
    <div>
      <section>
        {!selectedProduct ? (
          <Loading></Loading>
        ) : (
          <>
            <PurchaseForm
              key={selectedProduct._id}
              product={selectedProduct}
            ></PurchaseForm>
          </>
        )}
      </section>
    </div>
  );
};

export default Purchase;

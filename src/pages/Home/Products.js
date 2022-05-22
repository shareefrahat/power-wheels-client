import React from "react";
import Loading from "../../components/Loading";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products] = useProducts();

  return (
    <>
      <section>
        <h2 class="divider text-2xl lg:text-4xl font-semibold font-primary">
          Latest Products
        </h2>
        <p className="text-xl lg:text-2xl font-secondary mt-5">
          Latest accessories and auto parts!
        </p>
      </section>
      <section>
        {!products ? (
          <div>
            <Loading></Loading>
          </div>
        ) : (
          <div className="grid gird-cols-1 lg:grid-cols-3 gap-10 w-fit mx-auto">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Products;

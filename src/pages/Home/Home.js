import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <>
      <section>
        <Banner></Banner>
      </section>
      <section className="my-20">
        <Products></Products>
      </section>
      <section className="my-20">
        <Summary></Summary>
      </section>
      <section className="my-20">
        <Reviews></Reviews>
      </section>
    </>
  );
};

export default Home;

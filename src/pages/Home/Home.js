import React from "react";
import Banner from "./Banner";
import Newsletter from "./Newsletter";
import Posters from "./Posters";
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
        <Posters></Posters>
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
      <section className="mt-20">
        <Newsletter></Newsletter>
      </section>
    </>
  );
};

export default Home;

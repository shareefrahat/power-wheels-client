import React from "react";
import Banner from "./Banner";
import Summary from "./Summary";

const Home = () => {
  return (
    <>
      <section>
        <Banner></Banner>
      </section>
      <section className="my-20">
        <Summary></Summary>
      </section>
    </>
  );
};

export default Home;

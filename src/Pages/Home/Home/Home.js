import React from "react";
import Banner from "../Banner/Banner";

import Services from "../Services/Services";
import Advertisement from "./Advertisement/Advertisement";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>

      <Services></Services>
      <Advertisement></Advertisement>
    </div>
  );
};

export default Home;

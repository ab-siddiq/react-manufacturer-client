import React, { useState } from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Categories from "./Categories";
import Mall from "./Mall";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return <div>
    <Banner></Banner>
    <Parts></Parts>
    <Categories></Categories>
    <Mall></Mall>
    <BusinessSummary></BusinessSummary>
    <Reviews></Reviews>
  </div>;
};

export default Home;

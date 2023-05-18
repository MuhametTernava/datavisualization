import React from "react";
import HeroPage from "../components/home-hero/index";
import FirstArticle from "../components/home-first-article";
import SecondArticle from "../components/home-second-article";
import ThirdArticle from "../components/home-third-article";

const Home = () => {
  return (
    <div>
      <HeroPage></HeroPage>
      <FirstArticle></FirstArticle>
      <SecondArticle></SecondArticle>
      <ThirdArticle></ThirdArticle>
    </div>
  );
};

export default Home;

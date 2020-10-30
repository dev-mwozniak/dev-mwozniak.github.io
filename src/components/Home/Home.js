import React from "react";
import Helmet from "react-helmet";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Top100 from "../Top100/Top100";
import TvMusic from "../TvMusic/TvMusic";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Helmet title="Zadanie testowe" />
      <Header />
      <Hero />
      <Top100 />
      <TvMusic />
      <Footer /> 
    </> 
  ); 
}; 

export default Home;

import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Review from "./Review/Review";
import Teams from "./Teams/Teams";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Hero />
        <About />
        <Services />
        <Review />

        {/* teams */}
        <Teams />

        {/*  Works*/}
        {/* clients */}
        {/* get in touch */}
        <Contact />
        {/* footer */}

   

      </div>
      <Footer/>
    </>
  );
};

export default Home;

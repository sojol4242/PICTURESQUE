import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Review from "./Review/Reviews";
import Teams from "./Teams/Teams";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import Contact from "./Contact/Contact";
import ScrollTop from "../Common/ScrollTop";
import WorksGallery from "./Works/WorksGallery";
// import Works from "./Works/Works";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <ScrollTop />
        <Hero />
        <About />
        <Services />
        <Review />

        {/* teams */}
        <Teams />
         {/* Works */}
        <WorksGallery />

        {/* clients */}

        {/* get in touch */}
        <Contact />
        {/* footer */}
      </div>
      <Footer />
    </>
  );
};

export default Home;

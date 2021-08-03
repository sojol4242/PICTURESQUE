import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Review from "./Review/Reviews";
import Teams from "./Teams/Teams";
import Footer from "../Common/Footer/Footer";
import Contact from "./Contact/Contact";
import ScrollTop from "../Common/ScrollTop";
import WorksGallery from "./Works/WorksGallery";
import FreeQuestion from "./FreQuestion/FreeQuestion";
import NavBar from "../Common/Header/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <ScrollTop />
        <Hero />
        <About />
        <Services />

        {/* teams */}
        <Teams />
        {/* Works */}
        <WorksGallery />
        {/* clients */}
        <FreeQuestion />
        {/* get in touch */}
        <Review />
        {/* Contact Us */}
        <Contact />
        {/* footer */}
      </div>
      <Footer />
    </>
  );
};

export default Home;

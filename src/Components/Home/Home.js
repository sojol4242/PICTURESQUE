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
import FreeQuestion from "./FreQuestion/FreeQuestion";
import NavBar from "../Common/Header/NavBar";

// import Works from "./Works/Works";

const Home = () => {
  return (
    <>
      {/* <Header />
       */}
      <NavBar/>
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
        <Contact />
        {/* footer */}
      </div>
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import "./about.css";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import carousalData from "../../../StaticData/CarousalData";

const About = () => {

  return (
    <section className="container-fluid about_Section" id="about">
      <div className="row about">
        <Fade duration={2500} left distance="140px">
          <div className="col-md-6 col-sm-12 about-banner shadow-sm rounded mx-auto">
            <Carousel className="h-100 w-100 m-auto">
              {carousalData.map((carousal) => (
                
                <Carousel.Item key={carousal.id}>
                  <img
                    src={carousal.img}
                    className="img-fluid"
                    alt="about_Image"
                    style={{ height: "300px", width: "100%",borderRadius:"10px"}}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Fade>

        <div className="col-md-6 col-sm-12 about_content">
          <Fade duration={2500} right distance="140px">
            <h2 className="about_title">Who we Are?</h2>
          </Fade>
          <Fade duration={3000} right distance="140px">
            {" "}
            <h5 className="about_sub_title" distance="140px">
              HOW WE CAN CAPTURE <span>YOUR ARTISTIC</span> MOMENTS
            </h5>{" "}
          </Fade>
          <Fade duration={3500} bottom distance="140px">
            <p className="about_words">
              Start by looking at the picture or imagining it in your head.
              Then, start describing the picture in the greatest detail that you
              can. Think about how that picture might inspire a story and jot
              down your thoughts; later on you can turn those notes into a full
              story.
            </p>
          </Fade>
          <Zoom left distance="140px">
            <a href="#contact">
              <motion.button
                whileHover={{
                  scale: 1.01,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                className="about_btn"
              >
                Say Hello
              </motion.button>
            </a>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default About;

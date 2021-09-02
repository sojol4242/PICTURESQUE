import React from "react";
import Fade from "react-reveal/Fade";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";
import ReactTypingEffect from "react-typing-effect";
import carousalData from "../../../StaticData/CarousalData";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="container-fluid">
    
        <Carousel className="w-100 m-auto">
          {carousalData.map((carousal) => (
            <Carousel.Item key={carousal._id}>
            
              <Zoom duration={1000}>
                <div className="row hero">
                  <div className="col-md-12  col-sm-12 hero-content pt-1">
                    <Fade duration={2000} right></Fade>
                    <p className="hero-title-span">
                <ReactTypingEffect text={["Welcome To", "Picturesque"]} />
              </p>
                    <Fade duration={4000} left>
                      <h2 className="hero-title">{carousal.title}</h2>
                    </Fade>
                    <Fade duration={6000} bottom>
                      <p className="hero-words">{carousal.para}</p>
                    </Fade>
                    <Zoom duration={6000} right>
                      <a href="#services">
                        <motion.button
                          whileHover={{
                            scale: 1.01,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,255,255)",
                          }}
                          className="hero-btn"
                        >
                          Hire us
                        </motion.button>
                      </a>
                    </Zoom>
                  </div>
                </div>
              </Zoom>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Hero;

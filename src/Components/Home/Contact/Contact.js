import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";
import { Col, Row } from "react-bootstrap";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    swal(
      "Thank You!",
      "Please stay tuned! As soon as possible we will contact with you",
      "success"
    );
  };

  return (
    <section id="contact">
      <div className="container contact">
        <div className="row">
          <Fade duration={2500} left>
            <div className="col-md-6 contactLeft mx-auto">
              <img
                src="https://i.ibb.co/xsp0MFN/4110-web-element-contact-us.gif"
                alt="banner"
                className="img-fluid"
              />
            </div>
          </Fade>
          <Fade duration={2500} right>
            <div className="col-md-6 contactRight">
              <form onSubmit={handleSubmit} className="contactForm">
                <h4 className="title">CONTACT US</h4>
                <h5 className="subTitle">Stay Tuned</h5>
                <Row>
                  <Col md={12} lg={6}>
                    <input placeholder="Your Name" type="name" required />
                  </Col>
                  <Col md={12} lg={6}>
                    <input placeholder="Your Email" type="email" required />
                  </Col>
                  <Col md={12}>
                    <input placeholder="Subject" type="text" required />
                  </Col>
                  <Col md={12}>
                    <textarea
                      placeholder="Your Message Here..."
                      required
                    ></textarea>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center align-items-center">
                  <motion.button
                    whileHover={{
                      scale: 1.01,
                      textShadow: "0px 0px 8px rgb(255,255,255)",
                      boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                    className="hero-btn"
                    type="submit"
                  >
                  
                    Send{" "}
                    {" "}
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="plane"
                    />{" "}
                  </motion.button>
                </div>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;

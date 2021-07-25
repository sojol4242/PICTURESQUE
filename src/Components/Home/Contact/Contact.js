import React from "react";
import "./contact.css";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";
import { Col, Row } from "react-bootstrap";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_w90u6hu', 'template_ctskxer', event.target, 'user_t2Fl49b37joD2nKwlD0CH')
      .then((result) => {
          if(result){
            console.log(result.text);
            swal(
              "Thank You!",
              "Please stay tuned! As soon as possible we will contact with you",
              "success"
            );
          }
      }, (error) => {
          if(error){
            swal(
              "Something is wrong",
              "Please try again",
              "danger"
            );
            console.log(error.text);

          }
      });
    event.target.reset();
   
  };
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendForm('service_mxqr7j2', 'template_71ygzkj', e.target, 'user_VrMmDD9h6AwhVBhk2MFYr')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //   }
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
              <form onSubmit={handleSubmit} className="contactForm" >
                <h4 className="title">CONTACT US</h4>
                <h5 className="subTitle">Stay Tuned</h5>
                <Row>
                  <Col md={12} lg={6}>
                    <input placeholder="Your Name" type="name" name="name" required />
                  </Col>
                  <Col md={12} lg={6}>
                    <input placeholder="Your Email" type="email" name="email" required />
                  </Col>
                  <Col md={12}>
                    <input placeholder="Subject" type="text" name="subject" required />
                  </Col>
                  <Col md={12}>
                    <textarea
                      placeholder="Your Message Here..."
                      name="message"
                      required
                    ></textarea>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center align-items-center">
                  {/* <a
                    href="mailto:bsmrstueee90@gmail.com?cc=moniruzzaman.upwork@gmail.com"
                    rel="noopener noreferrer"
                  
                  > */}
                    <motion.button
                      whileHover={{
                        scale: 1.01,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                      type="submit"
                      className="hero-btn"
                    >
                      Send{" "}
                      <FontAwesomeIcon icon={faPaperPlane} className="plane" />{" "}
                    </motion.button>
                  {/* </a> */}
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

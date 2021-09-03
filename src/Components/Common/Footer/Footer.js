/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faAppStoreIos,
  faFacebookSquare,
  faGithubSquare,
  faGooglePlay,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./footer.css";
import SubFooter from "./SubFooter";
import nav_Icon from "../../../images/undraw_product_photography_91i2.svg";

const Footer = () => {
  const scrollTop = () => window["scrollTo"]({ top: 0, behavior: "smooth" });
  return (
    <section id="footer" className="container-fluid footer">
      <div className="row py-5 px-2 mx-auto">
        <div className="col-md-4 col-sm-12">
          <div className="leftTop  text-center">
            <div
              title="www.picturesque.org"
              className="my-2"
              onClick={scrollTop}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 0",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={nav_Icon}
                  title="Logo"
                  alt="logo"
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "50%",
                    border: "1px solid white",
                  }}
                />
                <span
                  className="text-white px-3"
                  style={{
                    fontFamily: "Dancing Script",
                    textTransform: "uppercase",
                    fontSize: "18px",
                  }}
                >
                  Picturesque
                </span>
              </div>
              <span
                style={{
                  height: "2px",
                  width: "100%",
                  background: "#fff",
                  margin: "10px 0",
                }}
              ></span>
            </div>
          </div>
          <div className="leftBottom mt-2">
            <h4
              className="text-uppercase"
              style={{
                textDecoration: "none",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              Download Our Mobile App
            </h4>
            <div
              className="mobileApp mt-4"
              style={{
                display: "flex",
                justifyContent:"flex-start",
                alignItems: "center",
                cursor: "pointer",

              }}
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                title="Android"
                style={{ height: "50px",  width: "60px", cursor: "pointer" }}
              />
              <FontAwesomeIcon
                icon={faAppStoreIos}
                title="Android"
                style={{ height: "50px", width: "60px", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div class="usefulLinks col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center my-5">
          <div className=" my-5">
            <h6
              className="text-uppercase"
              style={{
                borderBottom: "2px solid #fff",
              }}
            >
              Useful Links
            </h6>
            <div className="usefulLink d-flex flex-column justify-content-start align-items-start">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  fontSize: "36",
                  color: "#fff",
                }}
              >
                Home
              </a>
              <a
                href="#about"
                style={{
                  textDecoration: "none",
                  fontSize: "36",
                  color: "#fff",
                }}
              >
                About
              </a>
              <a
                href="#services"
                style={{
                  textDecoration: "none",
                  fontSize: "36",
                  color: "#fff",
                }}
              >
                Services
              </a>
              <a
                href="#works"
                style={{
                  textDecoration: "none",
                  fontSize: "36",
                  color: "#fff",
                }}
              >
                Works
              </a>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  fontSize: "36",
                  color: "#fff",
                }}
              >
                Contact
              </a>
              <a
                href="#reviews"
                style={{
                  textDecoration: "none",
                  fontSize: "36",
                  color: "#fff",
                }}
              >
                Reviews
              </a>
            </div>
          </div>{" "}
        </div>
        <div class="col-md-4 col-sm-12 right d-flex flex-column justify-content-center align-items-center">
          <div className="socialMedia ">
            <h6 className="text-uppercase">Connect With Social Media</h6>
            <div className="socialLinks mt-3 d-flex  justify-content-around align-items-start">
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{
                    textDecoration: "none",
                    fontSize: "36",
                    color: "#fff",
                  }}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  style={{
                    textDecoration: "none",
                    fontSize: "36",
                    color: "#fff",
                  }}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  style={{
                    textDecoration: "none",
                    fontSize: "36",
                    color: "#fff",
                  }}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  style={{
                    textDecoration: "none",
                    fontSize: "36",
                    color: "#fff",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-white"/>
      <div className="row">
        <div className="col-md-12 my-2">
          <SubFooter />
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import nav_Icon from "../../../images/undraw_photo_session_clqr.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import UserProfilePopUp from "./UserProfilePopUp";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const profile = user.img;

  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  // const scrollTop = () => window["scrollTo"]({ top: 0, behavior: "smooth" });

  return (
    <Navbar
      className={`navbar navbar-expand-lg  ${
        isSticky ? "navStyle" : "navDefault"
      }`}
      expand="lg"
    >
      <Navbar.Brand className="navBrand">
        <Nav.Link
          exact
          to="/"
          className="nav-link"
          onClick={() => window["scrollTo"]({ top: 0, behavior: "smooth" })}
        >
          <img
            src={nav_Icon}
            alt=""
            className={isSticky ? "brandIcon-color" : "brandIcon"}
          />
          {/* <FontAwesomeIcon icon={faVideo} className="brandIcon" />{" "} */}
          <span className={isSticky ? "navText-color" : "navText"}>
            Picturesque
          </span>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mainNav" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              exact
              to="/"
              className={isSticky ? "nav-link-change" : "nav-link"}
              onClick={() => window["scrollTo"]({ top: 0, behavior: "smooth" })}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#services"
              className={isSticky ? "nav-link-change" : "nav-link"}
            >
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#reviews"
              className={isSticky ? "nav-link-change" : "nav-link"}
            >
              Reviews
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#about"
              className={isSticky ? "nav-link-change" : "nav-link"}
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#contact"
              className={isSticky ? "nav-link-change" : "nav-link"}
            >
              Contact Us
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link to="/dashboard/profile" className="nav-link">
              Dashboard
            </Nav.Link>
          </Nav.Item> */}
          {/* <Nav.Item>
                        {
                        user.email ? 
                            <PopOver/> :
                            <Link to="/login">
                                <button className="loginBtn">Login</button>
                            </Link>
                        }
                    </Nav.Item> */}
        </Nav>
        <Nav className="ml-auto mainNav" activeKey="/home">
          <Nav.Item className="userProfile">
            {user.email ? (
              <img
                src={profile}
                alt={user.name}
                onClick={() => {
                  setOpen(!open);
                }}
                className="avatar"
              />
            ) : (
              <Link to="/auth">
                <motion.button
                  whileHover={{
                    scale: 1.01,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  className="loginBtn"
                >
                  Log In
                </motion.button>
              </Link>
            )}
          </Nav.Item>

          {open && <UserProfilePopUp />}
          {/* <Nav.Item>
                        {
                        user.email ? 
                            <PopOver/> :
                            <Link to="/login">
                                <button className="loginBtn">Login</button>
                            </Link>
                        }
                    </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

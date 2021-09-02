/* eslint-disable jsx-a11y/anchor-is-valid */

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import nav_Icon from "../../../images/undraw_product_photography_91i2.svg";
import "./navBar.css";
import UserProfilePopUp from "./UserProfilePopUp";

const NavBar = () => {
  const { user } = useContext(UserContext);

  const profile = user.img;
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  const scrollTop = () => window["scrollTo"]({ top: 0, behavior: "smooth" });

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  
  };

  return (
    <>
      {/* className={isSticky?"navBarChange":"navBar"} */}
      <div className={isSticky ? "navBarChange" : "navBar"}>
        <span className="hamburger" onClick={toggleLinks}>
          {showLinks ? (
            <>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={toggleLinks}
                className={isSticky ? "barIconChange" : "barIcon"}
              />
            </>
          ) : (
            <>
              {" "}
              <FontAwesomeIcon
                icon={faBars}
                onClick={toggleLinks}
                className={isSticky ? "barIconChange" : "barIcon"}
              />
            </>
          )}
        </span>
        <div className="brand" onClick={scrollTop}>
          <img
            src={nav_Icon}
            className={isSticky ? "brandIconChange" : "brandIcon"}
            title="Logo"
            alt="logo"
          />
          <span className={isSticky ? "brandTextChange" : "brandText"}>
            Picturesque
          </span>
        </div>
        {/* || isSticky?"navLinksChange active":"navLinksChange" */}

        <nav className={showLinks ? "navLinks active" : "navLinks"}>
          <a
            href="#"
            className={isSticky ? "navLinkChange" : "navLink"}
            
       
          >
            Home
          </a>
          <a
            href="#about"
            className={isSticky ? "navLinkChange" : "navLink"}
         
          >
            About
          </a>
          <a
            href="#services"
            className={isSticky ? "navLinkChange" : "navLink"}
            onClick={toggleLinks}
          
          >
            Services
          </a>
          <a
            href="#teams"
            className={isSticky ? "navLinkChange" : "navLink"}
      
          >
            Teams
          </a>

          <a
            href="#works"
            className={isSticky ? "navLinkChange" : "navLink"}
        
 
          >
            Portfolio
          </a>
          <a
            href="#reviews"
            className={isSticky ? "navLinkChange" : "navLink"}
  
            
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className={isSticky ? "navLinkChange" : "navLink"}
  
          
          >
            Contact
          </a>
        </nav>

        <div className="userProfile">
          {user.email ? (
            <img
              src={
                profile
                  ? profile
                  : "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png"
              }
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
        </div>

        {open && <UserProfilePopUp />}
      </div>
    </>
  );
};

export default NavBar;

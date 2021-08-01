/* eslint-disable jsx-a11y/anchor-is-valid */
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import nav_Icon from "../../../images/undraw_photo_session_clqr.svg";
import "./navBar.css";
import UserProfilePopUp from "./UserProfilePopUp";

const NavBar = () => {
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
  const scrollTop = () => window["scrollTo"]({ top: 0, behavior: "smooth" });

  return (
    <>
    {/* className={isSticky?"navBarChange":"navBar"} */}
      <div className={isSticky?"navBarChange":"navBar"}>
        <div className="brand" onClick={scrollTop}>
          <img src={nav_Icon} className={isSticky?"brandIconChange":"brandIcon"} title="Logo" alt="logo" />
          <span className={isSticky?"brandTextChange":"brandText"} >Picturesque</span>
        </div>
        <span className="hamburger">
          <FontAwesomeIcon icon={faBars} />
        </span>

        <nav className="navLinks">
          <a href="#" className={isSticky?"navLinkChange":"navLink"}>
            Home
          </a>
          <a href="#about" className={isSticky?"navLinkChange":"navLink"}>
            About
          </a>
          <a href="#services" className={isSticky?"navLinkChange":"navLink"}>
            Services
          </a>
          <a href="#teams" className={isSticky?"navLinkChange":"navLink"}>
            Teams
          </a>

          <a href="#works" className={isSticky?"navLinkChange":"navLink"}>
            Portfolio
          </a>
          <a href="#reviews" className={isSticky?"navLinkChange":"navLink"}>
            Testimonials
          </a>
        </nav>
        <div className="userProfile">
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
        </div>
        {open && <UserProfilePopUp />}
      </div>
    </>
  );
};

export default NavBar;

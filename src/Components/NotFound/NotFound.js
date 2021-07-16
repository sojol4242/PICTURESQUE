import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css"
const NotFound = () => {
  return (
    <div className="container-fluid notFound">
       <div className="bgError"></div>
        <Link to="/">
        
          <button className="btn btn-primary">     <FontAwesomeIcon icon={faArrowLeft}/> Back Home</button>
        </Link>
     
    </div>
  );
};

export default NotFound;

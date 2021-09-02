import { faHireAHelper } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, serviceName, img,  price } = service;

  return (
    <div className="service">
      <div className="serviceImg">
        <img src={img} alt={serviceName} />
      </div>
      <div className="serviceContent">
        <h2>{serviceName}</h2>
       
        <div className="servicePrice">
          <h3>Price:</h3>
          <h3 className="price">{price}</h3>
          <h3 className="price_tag">TK/Day</h3>
        </div>
        <Link to={`/CheckOutForm/${_id}`}>
          <motion.button
            whileHover={{
              scale: 1.01,
              textShadow: "0px 2px 8px 0px rgb(255,255,255)",
              boxShadow: "0px 2px 8px 0px rgb(255,255,255)",
            }}
            className="addBtn"
          >
            <FontAwesomeIcon icon={faHireAHelper} /> Hire Now
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Service;

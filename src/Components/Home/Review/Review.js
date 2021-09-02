import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './review.css'

const Review = ({rev}) => {
 
 const {name,img, date,position,review}=rev;
 const reviewShort=review.slice(0,100);
  return (
    < >
      <div className="reviewCard">
        <div className="cardHeader">
          <img src={img} alt={name} />
          <div className="headerContent">
            <h4 className="name">{name}</h4>
          
              <span className="company">{position}</span>
         
          </div>
          
        </div>
        <p className="para">
            { reviewShort}
          </p>
        <div className="cardFooter">
          <div className="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="date">
            <span>{date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;

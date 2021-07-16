import React from "react";
import { Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Fade from "react-reveal/Fade";
import "./team.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Team = ({ data, id }) => {
  return (
    <Tab.Pane eventKey={id + 1}>
      <div className="row">
        {data.map(({ img, name, linkedin, position, github ,phone}, index) => {
          return (
            <div key={index} className="col-md-4">
              <Fade left duration={1800} distance="140px">
                <div className={`cardContents cardContents${id + 1}`}>
                  <div className="cardContent">
                    <img src={img} alt={name} />
                    <h4 className="mt-2">{name}</h4>
   
                    <p className="position">{position}</p> 
                    <p className="phone"><span>Phone: </span> {phone}</p> 
                  </div>
                  <div className="social-links">
                    <a href={linkedin}>
                      <FontAwesomeIcon icon={faLinkedin} className="linkedin"/>
                    </a>
                    <a href={github}>
                      {" "}
                      <FontAwesomeIcon icon={faGithub} className="github"/>
                    </a>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </Tab.Pane>
  );
};

export default Team;

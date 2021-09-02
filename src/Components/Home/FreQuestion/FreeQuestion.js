import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./faq.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
const FreeQuestion = () => {
  const faqData = [
    {
      id: 2141,
      header: "What is Picturesque?",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!",
    },
    {
      id:42124,
      header: "What is your company goal?",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!",
    },
    {
      id:1214,
      header: "How I choose a plan?",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!",
    },
    {
      id: 1981,
      header: "Is it good for production level photography?",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!",
    },
  ];

  return (
    <div className="container-fluid my-3  mx-auto">
      <div className="row">
        <div className="services_head col-md-12 text-center m-auto">
          <h2 className="title">
            {" "}
            <span>FAQ</span>'s
          </h2>
        </div>
      </div>
      <Accordion defaultActiveKey="0" className="py-2">
        {faqData.map((data) => (
          <Card className="faqCard my-2" key={data.id}>
            <Accordion.Toggle
              as={Button}
              className="bg-transparent  faqHeader"
              eventKey={data.id}
            >
              <Card.Header className="d-flex justify-content-between align-items-center text-uppercase">
                <h6 style={{fontSize:"14px",lineHeight:"1.8"}}> {data.header}</h6>

                <p>
                  {" "}
                  <FontAwesomeIcon
                    style={{ fontSize: "20px", margin: "0 20px" }}
                    icon={faArrowAltCircleDown}
                  />
                </p>
              </Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={data.id}>
              <Card.Body className="faqDesc">{data.desc}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default FreeQuestion;

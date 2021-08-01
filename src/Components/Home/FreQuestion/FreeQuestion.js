import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./faq.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
const FreeQuestion = () => {
  const faqData = [
    {
      id: 1,
      header: "What is Picturesque?",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!",
    },
    {
      id: 2,
      header: "What is your company goal?",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!",
    },
    {
      id: 3,
      header: "How I choose a plan?",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!",
    },
    {
      id: 4,
      header: "Is it good for production level photography?",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate et, quidem exercitationem delectus possimus optio obcaecati quod rerum? Adipisci!",
    },
  ];

  return (
    <div className="container-fluid my-3 px-5 mx-auto">
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
          <Card className="faqCard my-2">
            <Accordion.Toggle
              as={Button}
              className="bg-transparent  faqHeader"
              eventKey={data.id}
            >
              <Card.Header className="d-flex justify-content-between align-items-center text-uppercase text-justify">
                <h6> {data.header}</h6>

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

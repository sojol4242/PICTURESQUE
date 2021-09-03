import React from "react";
import { Nav, Tab } from "react-bootstrap";
import teamData from "../../../StaticData/TeamData";
import Team from "./Team";
const Teams = () => {
  return (
    <section id="teams" className="container-fluid teams">
      <div className="row my-2">
        <div className="services_head col-md-12 text-center m-auto">
          <h2 className="title">
            {" "}
            <span>Our</span> Teams
          </h2>
        </div>
      </div>

      <Tab.Container defaultActiveKey="1">
        <div className="">
          <Nav className="teamNav">
            <Nav.Item className="link1">
              <Nav.Link eventKey="1">
                <img
                  src="https://i.ibb.co/X7NbHwj/55112-video-editing.gif"
                  alt="videographer"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="link2">
              <Nav.Link eventKey="2">
                <img
                  src="https://i.ibb.co/tm93T8P/9948-camera-pop-up.gif"
                  alt="photographer"
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Tab.Content>
          {teamData.map((data, index) => (
            <Team id={index} data={data} key={index} />
          ))}
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};

export default Teams;

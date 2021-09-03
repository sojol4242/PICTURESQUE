/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import Marquee from "react-fast-marquee";
const qoutes = [
  {
    id: 34,
    text: "PHOTOGRAPHY IS AN AUSTERE AND BLAZING POETRY OF THE REAL.",
    author: "Ansel Adams",
  },
  {
    id: 56,
    text: "When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.",
    author: "Destin Sparks",
  },
  {
    id: 93,
    text: "Photography is the art of making memories tangible.",
    author: "Ansel Adams",
  },
];
const Qoutes = () => {
  return (
    <div className="container-fluid">
      <Marquee
        className="marqueeText mt-5"
        pauseOnClick={true}
        pauseOnClick={true}
        speed={20}
        style={{
        background:"transparent !important"
        }}
      >
        {qoutes.map((qoute) => (
          <p
            key={qoute.id}
            style={{
              color: "#131127",
              fontSize: "18px",
              cursor: "pointer",
              fontFamily: "'Indie Flower', cursive",
              textTransform: "uppercase",
            }}
          >
           "{qoute.text}"
            <span
              style={{
                color: "#131127",
                fontSize: "24px",
                cursor: "pointer",
                fontFamily: "'Allison', cursive",
                fontWeight: "700",
              }}
            >
              - {qoute.author} &nbsp;&nbsp;
            </span>
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default Qoutes;

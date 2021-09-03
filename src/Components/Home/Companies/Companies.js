/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Marquee from "react-fast-marquee";
const companiesData = [
  {
    id: 45,
    img: "https://i.ibb.co/zrWRh29/google-removebg-preview.png",
    title: "Google",
    link: "https://www.google.com/",
  },
  {
    id: 23,
    img: "https://i.ibb.co/N1mfxW1/images-removebg-preview.png",
    title: "air bnb",
    link: "https://www.airbnb.com/",
  },
  {
    id: 33,
    img: "https://i.ibb.co/R25J0f6/493f5bba-81a4-11e9-bf79-066b49664af6-cm-1440w-removebg-preview.png",
    title: "Netflix",
    link: "https://www.netflix.com/",
  },
  {
    id: 13,
    img: "https://i.ibb.co/s6GCvZX/Foodpanda-Logo.jpg",
    title: "foodpanda",
    link: "https://www.foodpanda.com/",
  },
  {
    id: 31,
    img: "https://i.ibb.co/FnJDJ5x/pathao-1541582142793-removebg-preview.png",
    title: "pathao",
    link: "https://pathao.com/",
  },
  {
    id: 61,
    img: "https://i.ibb.co/MfPwKy0/download.png",
    title: "Uber",
    link: "https://www.uber.com/",
  },
];

const Companies = () => {
  return (
    <div className="pt-5 container-fluid">
      <h2
        className="text-center about_sub_title py-5"
        style={{ fontSize: "24px" }}
      >
        Recently We Worked For
      </h2>
      <Marquee pauseOnClick={true} pauseOnClick={true} speed={30}>
        <div className="container-fluid d-flex justify-content-around align-items-center">
          {companiesData.map((companies) => (
            <a
              href={companies.link}
              target="_blank"
              title={companies.title}
              className="card bg-grey mb-3 p-2 shadow rounded"
              key={companies.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                height: "150px",
                maxWidth: "12rem",
                width: "100%",
                borderRadius: "10px",
                border:"none",
                margin:"20px"
              }}
            >
              <img
                src={companies.img}
                title={companies.title}
                alt={companies.title}
                className="p-1 img-fluid h-75"
                style={{
                 
                  borderRadius: "10px",
                  border:"none",
                  
                }}
             
              />
              <p style={{ color: "#131127", fontWeight: "700" }}>
                {companies.title}
              </p>
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Companies;

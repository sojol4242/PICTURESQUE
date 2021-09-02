import React from "react";

const PreLoader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <img
       className="h-100 img-fluid"
        src="https://i.ibb.co/bW5xKGC/50056-camera-moving.gif"
        alt="Welcome to Picturesque"
        title="Welcome to Picturesque"
      />
    </div>
  );
};

export default PreLoader;

import React from "react";
import { Link } from "react-router-dom";

const SubFooter = () => {
  return (
 
    <div title="www.picturesque.org"  className="d-flex justify-content-center align-items-center text-center">
      <p className="copyRight">
        Copyright &copy; 2021{" "}
         <Link to="/home" className="siteName">
          www.picturesque.org
        </Link> All rights reserved.
      </p>
    </div>
  );
};

export default SubFooter;

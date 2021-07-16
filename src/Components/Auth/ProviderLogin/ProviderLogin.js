import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { loginWithProvider } from "../LoginManager";
import toast from "react-hot-toast";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import "../auth.css";
import { googleProvider } from "../Firebase";

const ProviderLogin = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // const googleProvider = new firebase.auth.GoogleAuthProvider();
  // const fbProvider = new firebase.auth.FacebookAuthProvider();
  // const ghProvider = new firebase.auth.GithubAuthProvider();
  const { setUser } = useContext(UserContext);
  const [isSignUp, setSignUp] = useState(false);
  const handleResponse = (res) => {
    setUser(res);
    if (!res.error) {
      toast.success("Successfully Logged In!");
      history.replace(from);
    }
  };
  const handleSignIn = (provider) => {
    const loading = toast.loading("Please wait...");
    loginWithProvider(provider).then((res) => {
      if (res.error) {
        toast.dismiss(loading);
        toast.error(res.error);
      }
      handleResponse(res);
      toast.dismiss(loading);
    });
  };
  return (
    <>
      <h1 className="text-center text-uppercase p-1">Login with social account</h1>
      <div className="container-fluid auth">
        <div
          onClick={() => handleSignIn(googleProvider)}
          className="social-icon"
        >
          <FontAwesomeIcon icon={faGoogle} />
        </div>
        {/* <div onClick={() => handleSignIn(fbProvider)} className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div onClick={() => handleSignIn(ghProvider)} className="social-icon">
          <FontAwesomeIcon icon={faGithub} />
        </div> */}
      </div>
    </>
  );
};

export default ProviderLogin;

import React, { useContext, useState } from "react";

import "firebase/auth";
import Fade from "react-reveal/Fade";
import { loginWithProvider } from "../LoginManager";
import toast from "react-hot-toast";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import "../auth.css";
import { googleProvider } from "../Firebase";
import ReactTypingEffect from "react-typing-effect";

const ProviderLogin = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // const googleProvider = new firebase.auth.GoogleAuthProvider();
  // const fbProvider = new firebase.auth.FacebookAuthProvider();
  // const ghProvider = new firebase.auth.GithubAuthProvider();
  const { setUser } = useContext(UserContext);
  // const [isSignUp, setSignUp] = useState(false);
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
      <div className="container-fluid">
        <div className="row auth">
          <Fade duration={2000} left >
            <div className="col-md-4 col-lg-4 col-sm-12 mx-auto auth-left">
              <p className="hero-title-span">
                <ReactTypingEffect text={["Welcome To", "Picturesque"]} />
              </p>

              <h2>Sign In with your google account</h2>
              <div
                onClick={() => handleSignIn(googleProvider)}
                className="social-icon"
              >
                <img
                  src="https://img.icons8.com/color/100/000000/google-logo.png"
                  alt="Google"
                />
                <span className="icon-text">Google login</span>
               
              </div>
              <p className="mt-3">Back to landing page <Link to="/home">wwww.picturesque.org</Link> </p>
            </div>
          </Fade>
          <Fade duration={2000} right>
            <div className="col-md-6 col-lg-6 col-sm-12 mx-auto auth-right"></div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default ProviderLogin;

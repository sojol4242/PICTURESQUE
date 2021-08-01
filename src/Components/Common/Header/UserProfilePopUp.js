import React, { useContext , useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBorderNone,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import toast from "react-hot-toast";
import { UserContext } from "../../../App";
import { handleSignOut } from "../../Auth/LoginManager";
const UserProfilePopUp = () => {
  const {
    user: { name, email, img },
    setUser,
  } = useContext(UserContext);
  const [isClose, setClose] = useState(false);
  const signOut = () => {
    const loading = toast.loading("Please wait...");
    handleSignOut().then((res) => {
      toast.dismiss(loading);
      setUser(res);
      toast.error("Logged Out!");
      setClose(true);
    });
  };

  function DropdownItem(props) {
    return (
      <a href="#home" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown" style={{ display: isClose && "none" }}>
      <div className="menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faHome} />}>
            Home
          </DropdownItem>
        </Link>
        <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
          {" "}
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faUser} />}>
            Profile
          </DropdownItem>
        </Link>
        <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
          {" "}
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faBorderNone} />}>
            Dashboard
          </DropdownItem>
        </Link>
        <Link onClick={signOut} style={{ textDecoration: "none" }}>
          {" "}
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
          >
            Log Out
          </DropdownItem>
        </Link>
      </div>
    </div>
  );
};

export default UserProfilePopUp;

import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./header.css";
import HeaderOptions from "./HeaderOptions";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { auth } from "./firebase";
function Header() {
  const dispatch = useDispatch();
  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://img.icons8.com/fluency/48/000000/linkedin.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icons={HomeIcon} title="Home" />
        <HeaderOptions Icons={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icons={WorkIcon} title="Jobs" />
        <HeaderOptions Icons={SmsIcon} title="Messages" />
        <HeaderOptions Icons={NotificationsIcon} title="Notifications" />
        <button onClick={logOut}>Logout</button>
      </div>
    </div>
  );
}

export default Header;

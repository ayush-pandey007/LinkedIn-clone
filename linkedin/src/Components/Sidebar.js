import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import "./sidebar.css";
function Sidebar() {
  const user = useSelector(selectUser);
  const ReacentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://coolbackgrounds.io/images/backgrounds/index/disco-dba865f1.png"
          alt="img"
        />
        <Avatar className="sidevar__avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h3>{user.email}</h3>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statsNumber"> 245352</p>
        </div>
        <div className="sidebar__stat">
          <p>views of your post</p>
          <p className="sidebar__statsNumber">325234</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>recent</p>
        {ReacentItems("reactjs")}
        {ReacentItems("reactjs")}
        {ReacentItems("reactjs")}
        {ReacentItems("reactjs")}
        {ReacentItems("reactjs")}
        {ReacentItems("reactjs")}
        {ReacentItems("reactjs")}
      </div>
    </div>
  );
}

export default Sidebar;

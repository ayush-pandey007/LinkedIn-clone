import React from "react";
import "./headeroptions.css";
function HeaderOptions({ Icons, title }) {
  return (
    <div className="header_options">
      {Icons && <Icons className="header__icons" />}
      <p className="header__title">{title}</p>
    </div>
  );
}

export default HeaderOptions;

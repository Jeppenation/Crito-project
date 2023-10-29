import React from "react";

import "./Buttons.css";

const Buttons = ({ url, type, title }) => {
  const buttonType = () => {
    switch (type) {
      case "yellow":
        return "btn-theme";

      case "black":
        return "btn-black";

      case "browse":
        return "browse-btn";

      default:
        return "btn-transparent";
    }
  };

  return (
    <a href={url} className={buttonType()}>
      {title}
      <i className="fa-regular fa-arrow-up-right"></i>
    </a>
  );
};

export default Buttons;

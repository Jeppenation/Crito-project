import React from "react";
import Footer from "../components/Footer/Footer";
import Buttons from "../components/Generics/Buttons/Buttons";

import "../components/CSS-SCSS/Main/NotFound/NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="text-area">
          <h1>404 not found</h1>

          <Buttons url="/" type="yellow" title="Return" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;

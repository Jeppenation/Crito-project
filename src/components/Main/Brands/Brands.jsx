import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img_paperz from '@images/Paperz.svg';
import img_dorfus from '@images/Dorfus.svg';
import img_martin from '@images/Martin.svg';
import img_square from '@images/Square-logo.svg';
import img_gobona from '@images/Gobona-logo.svg';

// import img_paperz from "../../../assets/images/Paperz.svg";
// import img_dorfus from "../../../assets/images/Dorfus.svg";
// import img_martin from "../../../assets/images/Martin.svg";
// import img_square from "../../../assets/images/square-logo.svg";
// import img_gobona from "../../../assets/images/Gobona-logo.svg";

import "../../CSS-SCSS/Main/Brands/Brands.css";

const brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <a href="#" className="logo paperz">
          <img src={img_paperz} alt="Paperz company" />
        </a>
        <a href="#" className="logo dorfus">
          <img src={img_dorfus} alt="Dorfus company" />
        </a>
        <a href="#" className="logo martin">
          <img src={img_martin} alt="Martino company" />
        </a>
        <a href="#" className="logo square">
          <img src={img_square} alt="Square company" />
        </a>
        <a href="#" className="logo gobona">
          <img src={img_gobona} alt="Gobona company" />
        </a>
      </div>
    </section>
  );
};

export default brands;

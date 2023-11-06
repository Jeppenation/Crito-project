import React from 'react';
import '../../CSS-SCSS/Main/ProjectCase/ProjectCase.css'

import ImageOne from'@images/man-reading-paper.png'
import ImageTwo from '@images/desk-with-items.png'
import ImageThree from '@images/notebook-and-mug.png'
import ImageFour from '@images/laptop.png'
import Buttons from '../../Generics/Buttons/Buttons';

const ProjectCase = () => {
  return (
    <section className="project-and-case">
      <div className="container">
        <div className="section-title">
          <p>Project & Case Studies</p>
          <h2>Let's Look at Our Global Projects</h2>
        </div>

        <div className="project-and-cases">
          <a href="#" className="project">
            <img src={ImageOne} alt="man reading a paper" />
            <h3>Grow your business</h3>
            <div className="readmore">
              Read More <i className="fa-regular fa-arrow-up-right"></i>
            </div>
          </a>
          <a href="#" className="project">
            <img src={ImageTwo} alt="desk with items" />
            <h3>Why your client needs a responsive website</h3>
            <div className="readmore">
              Read More <i className="fa-regular fa-arrow-up-right"></i>
            </div>
          </a>
          <a href="#" className="project">
            <img src={ImageThree} alt="notebook and a mug" />
            <h3>Educate your employees to get better results</h3>
            <div className="readmore">
              Read More <i className="fa-regular fa-arrow-up-right"></i>
            </div>
          </a>
          <a href="#" className="project">
            <img src={ImageFour} alt="laptop with a business app on the screen" />
            <h3>Business insights are an important piece of your business</h3>
            <div className="readmore">
              Read More <i className="fa-regular fa-arrow-up-right"></i>
            </div>
          </a>
        </div>

        <div className="center-content">
            <Buttons url='/projects' type='black' title='All Recent Projects' />
        </div>
      </div>
    </section>
  );
};

export default ProjectCase;

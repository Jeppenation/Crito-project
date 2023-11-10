import React from 'react';
import '../../CSS-SCSS/Main/ProjectCase/ProjectCase.css'

import ImageOne from'@images/man-reading-paper.png'
import ImageTwo from '@images/desk-with-items.png'
import ImageThree from '@images/notebook-and-mug.png'
import ImageFour from '@images/laptop.png'
import Buttons from '../../Generics/Buttons/Buttons';
import ProjectArticles from './ProjectArticles';
import SectionTitle from '../../Generics/SectionTitle/SectionTitle';

const ProjectCase = () => {

 const articles = [
  {
    url: '/',
    image: ImageOne,
    alt: 'man reading a paper',
    text: 'Grow your business'
  },
  {
    url: '/',
    image: ImageTwo,
    alt: 'desk with items',
    text: 'Why your client needs a responsive website'
  },
  {
    url: '/',
    image: ImageThree,
    alt: 'notebook and a mug',
    text: 'Educate your employees to get better results'
  },
  {
    url: '/',
    image: ImageFour,
    alt: 'laptop with a business app on the screen',
    text: 'Business insights are an important piece of your business'
  },

 ]

  return (
    <section className="project-and-case">
      <div className="container">

        <SectionTitle title='Project & Case Studies' header="Let's Look at Our Global Projects" />
        

        <div className="project-and-cases">

        {
          articles.map((art, index) => (
            <ProjectArticles 
              key={index}
              url={art.url}
              image={art.image}
              alt={art.alt}
              text={art.text}
            />

          ))
        }

        </div>

        <div className="center-content">
            <Buttons url='/projects' type='black' title='All Recent Projects' />
        </div>
      </div>
    </section>
  );
};

export default ProjectCase;

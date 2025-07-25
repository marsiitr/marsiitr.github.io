import React from 'react';
import '../styles/Home.css';
import Console from './Console/Console.js'
import ParticlesComponent from './particles.js';
import { Carousel } from 'react-responsive-3d-carousel'
import 'react-responsive-3d-carousel/dist/styles.css'
import { useNavigate } from 'react-router-dom';
import AnimatedSVGHeader from './animationrobo.js';
import AnimatedConstructionLogo from './animationrobo.js';

const cardsData = [
  {
    title: 'Electronics',
    image: 'electronics.jpg',
    description: 'The Electronics team specializes in designing and building the electronic systems for our projects. Members gain hands-on experience with circuit design, microcontroller programming, and sensor integration, turning creative ideas into functional models and robots.',
    titleClass: 'electronics-title'
  },
  {
    title: 'AI/ML',
    image: 'aiml.jpg',
    description: 'The AI/ML team focuses on integrating artificial intelligence and machine learning into our projects. Members explore algorithms, data analysis, and model training to create intelligent robots and systems, enhancing their skills in cutting-edge technologies.',
    titleClass: 'aiml-title'
  },
  {
    title: 'Mechanical',
    image: 'mechanical.jpg',
    description: 'The Mechanical team is dedicated to designing and constructing the physical structures of our projects. Members work on CAD modeling, 3D printing, and mechanical assembly, gaining practical skills to bring innovative robotic designs to life.',
    titleClass: 'mechanical-title'
  },
  {
    title: 'Robotics',
    image: 'robotics.avif',
    description: 'The Robotics team focuses on building and programming robots. Members collaborate on projects involving system integration, autonomous navigation, and control systems, developing hands-on skills in robotics engineering and innovation.',
    titleClass: 'robotics-title'
  },
  {
    title: 'Web Development',
    image: 'webdev.jpg',
    description: 'The Web Development team focuses on creating and maintaining our online presence. Members design and develop the club website, manage content, and ensure seamless user experience, honing their skills in web technologies and digital communication.',
    titleClass: 'robotics-title'
  },
];

const items = [
  <img src="/group1.jpeg" alt="image1" width="500" height="400" />,
  <img src="/group2.jpeg" alt="image1" width="300" height="200" />,
  <img src="/group3.jpeg" alt="image1" width="300" height="200" />,
  <img src="/group4.jpeg" alt="image1" width="300" height="200" />,
  <img src="/group6.png" alt="image1" width="300" height="200" />,
];


const Homepage = (props) => {

  const navigate = useNavigate();

  return (
    <div className="homepage">
      <ParticlesComponent id="tsparticles" />
      <div className='anidiv'  > <AnimatedConstructionLogo className="ani"/></div>
    

    

      <main className="main-content">

        <div className="left">
          {/* <div className="header-line">Heart of Robotics at R-Land</div> */}
          <h2>
  <span className="gradient-text">Models</span> and
  <span className="gradient-text"> Robotics</span> Section
  <br />
  <span className="gradient-text-2">IIT Roorkee</span>
</h2>
          <p>We're a student group, bonded by our passion for Robotics. Delving into programming, electronics, and AI through projects and workshops.</p>
          <div className="hero-buttons">
            {/* <button onClick={() => navigate('/Teams')}>Our Team</button> */}
            <button className='projects-button' onClick={() => navigate('/Projects')}>Our Projects</button>
          </div>
        </div>


        <div className="canvas-container">
          {/* <img src="/model.png" alt="Robot" className="" /> */}
        </div>




      </main>

      <div className='homepage-console-head-container'>
        <div className='homepage-console-head'>
          Enter commands, ignite robots!
        </div>
      </div>
      <div className='homepage-console'>
        <Console display={props.display} setDisplay={props.setDisplay} />
      </div>

      <br />
      <h4 className='newfont'>Our Verticals</h4>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <h3 className={card.titleClass}>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <br />
      {/* <h4>Our Team</h4> */}
      {/*   */}

      <br />
      <h4 className='newfont'>Gallery</h4>
      
      <div className="carousel">
        <Carousel
          items={items}
          startIndex={0}
          onClickItem={() => navigate('/Gallery')}
        />
          <button className='gallery-button' onClick={() => navigate('/Gallery')}>See More..</button>
      </div>
    </div>
  );
};

export default Homepage;

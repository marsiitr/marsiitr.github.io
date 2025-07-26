import React from 'react';
import "../../styles/Projects.css"
import ProjectCard from '../ProjectCard/ProjectCard';
import ParticlesComponent from '../particles.js';
const projectData = [
  {
    image: "/robo4.png",
    title: "4- Legged Robot ROS Stimulation",
    description: " A URDF model of a four-legged robot and simulate its motion and behavior in both Gazebo and RViz environments.",
    duration: "05-02-2024 - 30-03-2024",
    creatorImage: "./logo.png",
    creatorName: "Vansh Yadav, Priyanshi Menghani, Sheetal Shende"
  },
  {
    image: "/robo4.png",
    title: "Cart-Pole Balance System using RL",
    description: "This project uses RL to balance a cart pole using OpenAI's Gym toolkit.",
    duration: "05-02-2024 - 30-03-2024",
    creatorImage: "./logo.png",
    creatorName: "Kris Keshav, Arpit Kumar Pandey, Jheel Maheshwari "
  },
  {
    image: "/robo4.png",
    title: "Curve Drawing Robot",
    description: "This project aims to design and develop a curve-drawing robot capable of accurately reproducing predefined curves and shapes on a given surface.",
    duration: "05-02-2024 - 30-03-2024",
    creatorImage: "./logo.png",
    creatorName: "Shravan Deva, Rajeev Kumawat, Prakul Balaji, Hemanga Sarma "
  },
  {
    image: "/robo4.png",
    title: "Line Following Robot",
    description: "A robot capable of navigating a predefined path marked by a contrasting line on a flat surface.",
    duration: "05-02-2024 - 30-03-2024",
    creatorImage: "./logo.png",
    creatorName: "Karthik Kuldeep, Adbhut Khatri, Yogesh Baghel"
  },
  {
    image: "/robo4.png",
    title: "Maze Solver using Reinforcement Learning",
    description: "This project aims to use RL techniques for autonomous maze navigation.",
    duration: "05-02-2024 - 30-03-2024",
    creatorImage: "./logo.png",
    creatorName: "Aman Yadav, Arpit Seth, Aman Tiwari"
  },
  {
    image: "/robo4.png",
    title: "ROS TurtleSim Exploration",
    description: "Explore various functionalities of ROS TurtleSim by implementing different behaviors and algorithms for the virtual turtle.",
    duration: "05-02-2024 - 30-03-2024",
    creatorImage: "./logo.png",
    creatorName: "Tanmay Singh Kushwaha, Madhav Ahuja"
  },
  {
    image: "/robo4.png",
    title: "Wall Following Robot",
    description: " It is a robot capable of autonomously navigating through indoor environments while maintaining a constant distance from adjacent walls.",
    duration: "05-02-2024 - 30-03-2024",
    creatorImage: "./logo.png",
    creatorName: "Ansuman Sahu, Pratik Ratan Sairujula Kolekar J vedanth "
  },
  {
    image: "/robo4.png",
    title: "Robotic Arm: Flipkart Grid 5.0",
    description: "Developed an autonomous robot capable of performing various tasks, such as sorting, picking, packing, and navigating complex warehouse environments.",
    duration: "05-10-2023 - 10-01-2024",
    creatorImage: "./logo.png",
    creatorName: "Jitesh Bhati, Nikhil Sharma, Rohit Kumawat, Vishal Bokhare, Sanya Jain"
  },
  {
    image: "/robo4.png",
    title: "E Waste Dustbin",
    description: "Segregates different types of electronic wastes automatically",
    duration: "12-04-2022 - 12-07-2022",
    creatorImage: "./logo.png",
    creatorName: "Jitesh Bhati, Abya Singh, Kaivalya"
  },
  {
    image: "/robo4.png",
    title: "Restaurant of the future",
    description: "An Autonomous Bot with LiDAR and Depth Cameras to assist restaurant personnel in the COVID-19 era by handling repetitive tasks and aiding navigation and obstacle-avoidance.",
    duration: "21-10-2021 - 12-01-2022",
    creatorImage: "./logo.png",
    creatorName: "Vansh goyal, Sanjeev krishnan,Abhay pratap singh"
  },
  {
    image: "/robo4.png",
    title: "Chitrak-2.0",
    description: "Chitrak is a dynamically stable quadruped robot designed to assist soldiers in rough terrains, carry payloads, and deliver aid in disaster zones where conventional vehicles can't operate.",
    duration: "14-06-2019 - 14-10-2019",
    creatorImage: "./logo.png",
    creatorName: "Dhruv Sehgal, Shubhanshu Agarwal"
  },
];


const Projects = () => {
  return (
    <>
    <ParticlesComponent id="tsparticles" />
      <h1 className='proj-h1'>Projects</h1>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            price={project.price}
            duration={project.duration}
            creatorImage={project.creatorImage}
            creatorName={project.creatorName}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
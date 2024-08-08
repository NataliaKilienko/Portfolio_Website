import React, { useEffect } from "react";
import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";
import StarsCanvas from "./../components/canvas/StarsCanvas";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="section">
      <StarsCanvas />
      <div className="container">
        <h2 className="title-1" data-aos="fade-up">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              img={project.img}
              index={index}
              aosAnimation="fade-up"
              aosDelay={index * 100}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;

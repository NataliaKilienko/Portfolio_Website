import React, { useEffect, useRef } from "react";
import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";
import StarsCanvas from "./../components/canvas/StarsCanvas";

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (ref && ref.getBoundingClientRect().top < window.innerHeight * 0.8) {
          ref.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="section">
      <StarsCanvas />
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              title={project.title}
              img={project.img}
              index={index}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;

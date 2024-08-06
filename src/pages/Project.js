import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import StarsCanvas from "./../components/canvas/StarsCanvas";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  const projectRef = useRef(null);

  useEffect(() => {
    if (projectRef.current) {
      setTimeout(() => {
        projectRef.current.classList.add("visible");
      }, 100);
    }
  }, []);

  return (
    <main className="section">
      <StarsCanvas />
      <div className="container">
        <div className="project-details" ref={projectRef}>
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
        </div>
      </div>
    </main>
  );
};

export default Project;

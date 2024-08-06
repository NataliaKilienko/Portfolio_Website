import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Project = forwardRef(({ title, img, index }, ref) => (
  <NavLink to={`/project/${index}`}>
    <li className="project" ref={ref}>
      <img src={img} alt={title} className="project__img" />
      <h3 className="project__title">{title}</h3>
    </li>
  </NavLink>
));

export default Project;
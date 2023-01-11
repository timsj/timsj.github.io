import React from "react";
import { HiOutlineCode, HiOutlineExternalLink } from "react-icons/hi";
import { projects } from "../data/projects";

const renderCards = projects.map((project, i) => {
  return (
    <div className="card" key={i}>
      <h4>{project.title}</h4>
      <div className="img-container">
        <img src={project.imgSrc} alt={project.imgAlt} className="img" />
      </div>
      <div className="btn-container">
        <a
          className="btn btn-alt"
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineCode />
          &nbsp;Repo
        </a>
        <a
          className="btn"
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineExternalLink />
          &nbsp;Live
        </a>
      </div>
      <div className="desc">
        <p>{project.desc}</p>
      </div>
      <div className="tech">
        {project.tech.map((el, i) => {
          return (
            <span className="text-small" key={i}>
              {el}
            </span>
          );
        })}
      </div>
    </div>
  );
});

const Work = () => {
  return (
    <div className="section">
      <div className="card-grid">{renderCards}</div>
    </div>
  );
};

export default Work;

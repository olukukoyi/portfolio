import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";
import ProjectArray from "./ProjectInfo";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects_container">
        <h1 className="projects__heading">Projects</h1>
        <div className="projects_list">
          {ProjectArray.map((item) => {
            return (
              <ProjectItem
                key={item.key}
                index={item.key}
                image={item.img}
                title={item.title}
                info={item.info}
                languages={item.languages}
                link={item.link}
              /> // for each item in the array, create a card and pass these values as props
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

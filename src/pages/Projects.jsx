import React from "react";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <div className="flex justify-center  py-32">
      <div className="px-12">
        <h1 className="name font-ubuntu mb-12 cursor-default">My Projects</h1>
        <div className="flex gap-6 flex-col md:flex-wrap md:flex-row md:justify-center">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </div>
  );
};

export default Projects;

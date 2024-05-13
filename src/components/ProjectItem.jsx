import React from "react";
import { projectImg } from "/src/assets/assets.js";

const ProjectItem = () => {
  return (
    <div className="flex md:flex-wrap ">
      <div className="bg-white  w-[80vw] md:w-[400px] rounded-lg ">
        <div className="flex flex-col  ">
          <img
            className=" rounded-t-lg flex-wrap md:w-150"
            src={projectImg}
            alt=""
          />
        </div>
        {/* ------------------ */}
        <div className="px-4 py-2 mt-5 ">
          <h1 className="font-bold text-xl text-blue-600 ">
            FaceBook clone in TypeScript
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quaerat vitae accusantium.
          </p>
          <div className="flex justify-center items-center gap-5 mt-6">
            <button className="sm-button">Live Preview</button>
            <button className="transparent-button">Source Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

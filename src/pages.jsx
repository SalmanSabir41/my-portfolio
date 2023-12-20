import React from "react";

const Pages = ({ img, name, ancorPath, github }) => {
  return (
    <>
      <div className="h-fit p-4 bg-slate-700 rounded-xl w-[300px]">
        <img src={img} alt="img not found" className="w-[100%] h-[250px]" />
        <h3 className="text-xl my-4 ">{name}</h3>
        <div className="flex gap-3">
          <a href={github} className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
            Github
          </a>
          <a href={ancorPath} className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
            Live Demo
          </a>
        </div>
      </div>
    </>
  );
};

const HeadingCommon = ({ texts, span, instruc }) => {
  return (
    <>
      <h3 className="text-4xl font-semibold">
        {texts}
        <span className="text-cyan-600"> {span}</span>
      </h3>
      <p className="text-gray-400 my-3 text-lg">{instruc}</p>
    </>
  );
};

export { Pages, HeadingCommon };

import React from "react";
import tailwind from "../assets/images/tailwind.webp";
import bootstrap from "../assets/images/Bootstrap+2.jpg";
import photoshop from "../assets/images/photoshop.webp";
import next from "../assets/images/next.jpg";
import { HeadingCommon } from "../pages";
const Skill = () => {
  const skill = [
    {
      logo: "logo-html5",
      level: "HTML",
      count: 86,
    },
    {
      logo: "logo-javascript",
      level: "JAVASCRIPT",
      count: 70,
    },
    {
      logo: "logo-css3",
      level: "CSS",
      count: 90,
    },
    {
      logo: "logo-github",
      level: "GITHUB",
      count: 50,
    },
    {
      logo: "logo-sass",
      level: "SASS",
      count: 50,
    },
    {
      logo: "logo-react",
      level: "REACT",
      count: 60,
    },
    
  ];
  return (
    <>
      <section id="skills" className="py-10 bg-gray-800 relative">
        <div className="mt-8 text-gray-100 text-center">
          <HeadingCommon texts={"My"} span={"Skills"} instruc={"My Knowledge"} />
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap ">
            {skill?.map((skill, i) => (
              <div key={i} className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl ">
                <div
                  style={{ background: `conic-gradient(rgb(8,145,170)${skill.count}%,#ddd ${skill.count}%)` }}
                  className="w-32 h-32 flex items-center justify-center rounded-full">
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    <ion-icon name={skill.logo}></ion-icon>
                  </div>
                </div>
                <p className="text-xl mt-3">{skill.level}</p>
              </div>
            ))}
            {/* ........................................... */}
            <div className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl ">
              <div style={{ background: `conic-gradient(rgb(8,145,170) 50%, #ddd 60%)` }} className="w-32 h-32 flex items-center justify-center rounded-full">
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img src={tailwind} alt="imgage not found" className="max-w-[60%]" />
                </div>
              </div>
              <p className="text-xl mt-3">TAILWIND</p>
            </div>
            <div className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl ">
              <div style={{ background: `conic-gradient(rgb(8,145,170) 60%, #ddd 60%)` }} className="w-32 h-32 flex items-center justify-center rounded-full">
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img src={bootstrap} alt="imgage not found" className="max-w-[60%]" />
                </div>
              </div>
              <p className="text-xl mt-3">BOOTSTRAP</p>
            </div>
            <div className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl ">
              <div style={{ background: `conic-gradient(rgb(8,145,170) 70%, #ddd 60%)` }} className="w-32 h-32 flex items-center justify-center rounded-full">
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img src={photoshop} alt="imgage not found" className="max-w-[60%]" />
                </div>
              </div>
              <p className="text-xl mt-3">PHOTOSHOP</p>
            </div>
            <div className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl ">
              <div style={{ background: `conic-gradient(rgb(8,145,170) 70%, #ddd 60%)` }} className="w-32 h-32 flex items-center justify-center rounded-full">
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img src={next} alt="imgage not found" className="max-w-[60%]" />
                </div>
              </div>
              <p className="text-xl mt-3">NEXT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;

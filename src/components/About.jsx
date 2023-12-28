import React from "react";
import aboutImg from "../assets/images/Screenshot 2023-12-22 162602.png";
import Resume from "../assets/Resume.pdf";
import { HeadingCommon } from "../pages";
const About = () => {
  const info = [
    { text: "Months Experience", count: "06" },
    { text: "Complete Projects", count: "09" },
    { text: "Companies Work", count: "01" },
  ];
  return (
    <>
      <section id="about" className="py-10 text-white">
        <div className="text-center mt-8">
          <HeadingCommon texts={"About"} span={"Me"} instruc={"My introduction"} />
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-gray-300 my-3 ">
                <p className="leading-7 text-justify w-11/12 mx-auto">
                  As a seasoned React developer with nine months of experience, I've completed nine projects, showcasing my expertise in React, Tailwind CSS, and Sass. Working at
                  Coding Boat, I've contributed to diverse projects, refining my skills in crafting efficient and scalable code. I'm dedicated to delivering high-quality web
                  applications that meet both client specifications and industry standards.
                </p>
                <div className="flex mt-10 items-center gap-7 ">
                  {info?.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        {content.count}
                        <span className="text-cyan-600">+</span>
                      </h3>
                      <span className="md:text-base text-xs">{content.text}</span>
                    </div>
                  ))}
                </div>
                <br />
                <br />
                <a href={Resume} download>
                  <button className="btn-primary">Download CV</button>
                </a>
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
                <img src={aboutImg} alt="error some reason" className="w-full object-cover bg-cyan-600 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

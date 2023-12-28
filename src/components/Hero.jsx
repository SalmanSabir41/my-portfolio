import React from "react";
import myImg from "../assets/images/Instagram.jpg";
const Hero = () => {
  const social_media = ["logo-instagram", "logo-facebook", "logo-linkedin", "logo-twitter"];
  return (
    <>
      <section id="home" className="min-h-screen flex py-20 md:flex-row flex-col items-center md:h-[500px]">
        <div className="flex-1 flex items-center justify-center h-full p-7">
          <img src={myImg} alt="img not found" className="md:w-2/3 h-full object-cover rounded-tl-[40px] rounded-br-[40px]  -rotate-8" />
        </div>
        <div className="flex-1 p-3">
          <div className="md:text-left text-center">
            <h1 className=" md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
              <span className=" text-cyan-600 md:text-6xl text-5xl ">
                Hello!
                <br />
                <span className="text-white md:text-4xl text-3xl "> My Name is Md Sabir</span>
              </span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">Fronted Developer</h4>
            <button className="btn-primary mt-4">Contact Me</button>
            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
              {social_media?.map((icon) => (
                <div key={icon} className="text-gray-600 hover:text-white cursor-pointer">
                  <ion-icon name={icon}></ion-icon>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

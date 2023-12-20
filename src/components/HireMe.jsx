import React from "react";
import myImg from "../assets/images/SABIR1.jpg";
import { HeadingCommon } from "../pages";
const HireMe = () => {
  return (
    <>
      <section id="hireme" className="py-10 px-3 text-white">
        <div className="text-center">
          <HeadingCommon texts={"Hire"} span={"Me"} instruc={"Do you have any work ?"} />
        </div>
        <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
          <div>
            <h2 className="text-2xl font-semibold">Do you want any work from me ?</h2>
            <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minima nostrum, hic quidem similique vel repudiandae illo, facilis laboriosam molestiae nesciunt
              eveniet pariatur dicta, explicabo ratione numquam ipsa modi inventore!
            </p>
            <button className="btn-primary mt-10">Say Hello</button>
          </div>
          <img src={myImg} alt="img not found" className="lg:h-[100%] h-80 lg:absolute bottom-0 right-0  object-cover " />
        </div>
      </section>
    </>
  );
};

export default HireMe;

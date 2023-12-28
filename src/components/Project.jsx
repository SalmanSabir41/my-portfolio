import React from "react";
import snake from "../assets/images/snake-game.jpg"
import movie from "../assets/images/movie.avif";
import stock from "../assets/images/stock.avif";
import weather from "../assets/images/weathers.png";
import watch from "../assets/images/watch.avif";
import food from "../assets/images/food.webp";
import calculater from "../assets/images/calculator.png";
import countries from "../assets/images/countries.jpg";
import images from "../assets/images/images.avif";
import ticTac from "../assets/images/tictac.jpg";
import shoping from "../assets/images/shoping.jpg";
import { Pages, HeadingCommon } from "../pages";
const Project = () => {
  return (
    <>
      <section id="projects" className="py-10 text-white ">
        <div className="text-center">
          <HeadingCommon texts={"My"} span={"Projects"} instruc={"My awesome works"} />
        </div>
        <br />
        <div className="flex px-5 mx-auto items-center justify-center  relative">
          <div className="lg:w-full w-full flex flex-wrap justify-center items-center gap-4">
          <Pages ancorPath={"https://glittery-macaron-cfce04.netlify.app/"}  img={snake} name={"The Snake Game"} />
            <Pages ancorPath={"https://"}  img={movie} name={"Movie App"} /> 
            {/* github={"https://github.com/imd511248/upstox-app"} */}
            <Pages ancorPath={"https://weatherappreactimd.netlify.app"}  img={weather} name={"Weather App"} />
            {/* github={"https://github.com/imd511248/react_weather_app"} */}
            <Pages ancorPath={"https://analogwatchcoad.netlify.app"}  img={watch} name={"Analog Watch"} />
            {/* github={"https://github.com/imd511248/realWatch"} */}
            <Pages ancorPath={"https://upstox-app.netlify.app"}  img={stock} name={"Upstox"} />
            {/* github={"https://github.com/imd511248/upstox-app"} */}
            <Pages ancorPath={"https://tic-tac-toe-gameimd.netlify.app"}  img={ticTac} name={"Tic Tac Toe"} />
            {/* github={"https://github.com/imd511248/tictactoe"} */}
            <Pages ancorPath={"https://spontaneous-mandazi-2839e1.netlify.app/"}  img={food} name={"Food App"} />
            {/* github={"https://github.com/imd511248/upstox-app"} */}
            <Pages ancorPath={"https://animated-hamster-82bc16.netlify.app/"}  img={calculater} name={"Calculater"} />
            {/* github={"https://github.com/imd511248/-media-Q1"} */}
            <Pages ancorPath={"https://sparkling-sopapillas-598908.netlify.app"}  img={images} name={"ImageFinder"} />
            {/* github={"https://github.com/imd511248/imageSearchEngine"} */}
            <Pages ancorPath={"https://"} img={countries} name={"countryAndtherecities"} />
            <Pages ancorPath={"http://shoping-app-imd.netlify.app"}  img={shoping} name={"fakeapiproduct"} />
            {/* github={"https://github.com/imd511248/fake-api-dilshad"} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

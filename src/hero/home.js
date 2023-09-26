import React from "react";
import "./home.css"; 
import hero from "./hero.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-pink-500">Samrat Bhusal</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6">
              a
              <span className="typewriter ml-2">
                <Typewriter
                  words={[" Professional Coder.", " Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              I use animation as a third dimension by which to simplify
              experiences and guide through each and every interaction. I'm not
              adding motion just to spruce things up, but doing it in ways that
              enhance user experiences.
            </p>
            <div className="mt-8 space-x-4">
              <button className="btn btn-secondary">View Portfolio</button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="hero_img bg-gradient-to-tr from-gray-200 via-white to-white shadow-lg rounded-lg h-96 w-96 mx-auto">
              <img
                src={hero}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

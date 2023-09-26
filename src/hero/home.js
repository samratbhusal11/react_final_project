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
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

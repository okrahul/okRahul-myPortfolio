import { useState } from "react";
import heroImg from "../assets/heroSection.png";
import { introduction, helloIamRahul } from "../utils/constants";
export const HeroSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.nativeEvent.offsetX * 0.06,
      y: e.nativeEvent.offsetY * 0.06,
    });
  };

  return (
    <section
      className="mt-auto w-full flex md:flex-row flex-col justify-between px-7 items-center flex-wrap"
      id="hero"
    >
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-400">
          {helloIamRahul}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-400">
          {introduction}
        </p>
      </div>

      <div className="flex flex-1 justify-center">
        <div className="relative" id="container" onMouseMove={handleMouseMove}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-[-1] mt-9"
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
              scale: "1.1",
            }}
          >
            <path
              fill="#FA4D56"
              d="M45.1,-52.5C59.3,-41.8,72.2,-28.4,76.6,-12.2C81.1,4.1,77.1,23.1,66.2,34.7C55.3,46.3,37.6,50.3,20.5,56.8C3.4,63.2,-13,72,-28.3,69.8C-43.6,67.7,-57.8,54.6,-68.8,38.4C-79.7,22.1,-87.5,2.6,-85.6,-16.2C-83.6,-35.1,-71.9,-53.4,-56,-63.8C-40.1,-74.2,-20,-76.6,-2.3,-73.9C15.4,-71.2,30.9,-63.2,45.1,-52.5Z"
              transform="translate(100 100)"
            />
          </svg>

          <img src={heroImg} alt="sideimg" width={300} height={100} />
        </div>
      </div>
    </section>
  );
};

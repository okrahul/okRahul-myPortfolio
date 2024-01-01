import { ProjectCards } from "./Cards";
import { personalProjectDetails } from "../utils/constants";
export const PersonalProject = () => {
  return (
    <section className="mt-auto justify-center" id="project">
      <span
        className="flex justify-center align-center text-center text-3xl font-semibold
           text-lg font-extrabold leading-[1] text-black sm:text-4xl
           bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent
      "
      >
        Project - Personal
      </span>
      <div className="flex flex-wrap justify-around my-4">
        {personalProjectDetails.map((details, index) => {
          return <ProjectCards key={index} details={details} />;
        })}
      </div>
    </section>
  );
};

import { ExperienceCards } from "./Cards";
import { experienceDetails } from "../utils/constants";
export const Experience = () => {
  return (
    <section className="mt-auto justify-center" id="experience">
      <span
        className="flex justify-center align-center text-center text-3xl font-semibold
       text-lg font-extrabold leading-[1] text-black sm:text-4xl
       bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent
  "
      >
        Experience
      </span>
      <div className="flex flex-col justify-center items-center gap-y-5 my-4 md:px-0 px-3">
        {experienceDetails.map((details, ind) => (
          <ExperienceCards key={ind} details={details} />
        ))}
      </div>
    </section>
  );
};

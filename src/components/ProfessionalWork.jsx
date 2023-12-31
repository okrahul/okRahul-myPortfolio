import { ProjectCards } from "./Cards";
import { companyProjectDetails } from "../utils/constants";
export const ProfessionalWork = () => {
  return (
    <section className="mt-auto justify-center">
      <span
        className="flex justify-center align-center text-center text-3xl font-semibold
           text-lg font-extrabold leading-[1] text-black sm:text-4xl
           bg-gradient-to-r from-red-300 via-blue-700 to-yellow-500 bg-clip-text text-transparent
      "
      >
        Professional Work
      </span>

      <div className="flex flex-wrap justify-around my-4">
        {companyProjectDetails.map((details, index) => {
          return <ProjectCards key={index} details={details} />;
        })}
      </div>
    </section>
  );
};

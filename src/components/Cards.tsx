import React from "react";
import { Badge } from "./Badge";

export const ProjectCards = ({ details }) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
      <img
        className="rounded-t-lg object-cover h-40 w-full"
        src={details.projectBanner}
        alt=""
      />

      <div className="p-3">
        <div className="flex mb-2 flex-wrap items-center gap-1">
          {details.badge.map((badge, ind) => (
            <Badge key={ind} text={badge} />
          ))}
        </div>

        <div className="flex flex-row">
          <ul className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-3 mt-2">
            {details.redirectTo.map((item, ind) => (
              <li>
                <a href={item.url} className="hover:underline me-3 md:me-4">
                  <ion-icon name={item.icon}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="#">
          {/* !here how to apply dark theme check when applied dark theme  */}
          {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> */}
          <p className="text-lg tracking-tight my-2">{details.projectName}</p>{" "}
        </a>

        <div className="px-4 max-h-32 overflow-y-auto">
          <ul className="list-disc leading-snug">
            {details.projectDetails.map((details, ind) => (
              <li key={ind}>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                  {details}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ExperienceCards = ({ details }) => {
  return (
    <div
      className="grid grid-rows-1 
      sm:grid-cols-2 sm:gap-4 gap-2 p-4 w-full md:w-1/2 bg-white rounded-lg shadow  border-gray-200 md:hover:scale-105 duration-500"
    >
      {/* Duration Column */}
      <div className="flex flex-col items-end">
        <span className="text-xs md:text-sm text-gray-500">
          {details.duration}
        </span>
        <span className="text-xs text-gray-500">{`(${details.exp})`}</span>
      </div>

      {/* Description Column */}
      <div className="flex flex-col">
        <p className="text-lg tracking-tight">{details.companyName}</p>
        <p className="text-xs tracking-tight  mb-2">{details.jobTitle}</p>
        {/* badge */}
        <div className="flex mb-2 flex-wrap items-center gap-1">
          {details.badge.map((badge, ind) => (
            <Badge key={ind} text={badge} />
          ))}
        </div>
        {/* badge */}

        <div className="px-4 max-h-40 overflow-y-auto">
          <ul className="list-disc leading-snug">
            {details.jobDescription.map((details, ind) => (
              <li key={ind}>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                  {details}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

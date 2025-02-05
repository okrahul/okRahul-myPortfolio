import { BlogsCards } from "./Cards";
import { useQuery } from "@tanstack/react-query";
import {getBlogsData} from "../api"

export const Blog = () => {
  const {data: blogsDetails, isError} = useQuery({ queryKey: ['blogsData'], queryFn: getBlogsData })

  if (isError || !blogsDetails?.length) {
    return <div></div>;
  }

  return (
    <section className="mt-auto justify-center  w-[100%]" id="blogs">
      <span
        className="flex justify-center align-center text-center text-3xl font-semibold
     text-lg font-extrabold leading-[1] text-black sm:text-4xl
     bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-3xl font-semibold"
      >
        Blogs
      </span>

      <div className="flex flex-wrap justify-around my-4">
        {blogsDetails?.map((details, index) => {
          return <BlogsCards key={index} details={details} />;
        })}
      </div>
    </section>
  );
};

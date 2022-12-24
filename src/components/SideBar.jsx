import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({selectedCategory , setSelectedCategory}) => {
  return (
    <div className="flex gap-5 md:flex-col overflow-x-scroll md:overflow-y-scroll scrollbar h-[95%] mb-3 py-5 ">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category.name)}
          className={`text-white font-semibold text-sm  flex items-center  gap-3 min-w-fit mx-5 py-2 px-3 hover:bg-red-600 hover:scale-105 transition-all duration-200 ease-in-out   rounded-full ${
            category.name === selectedCategory && "bg-red-600 scale-105"
          }`}
        >
          <span
            className={` text-xl ${
              category.name === selectedCategory
                ? "text-white "
                : "text-red-700"
            } `}
          >
            {category.icon}
          </span>
          <span className="min-w-fit">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SideBar;

import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api/fetchData";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { snippet } from "../utils/constants/snippet";

const Feed = ({ selectedCategory, setSelectedCategory }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCategory}`).then((res) => {
      setVideos(res?.items);
    });
  }, [selectedCategory]);
  return (
    <div className="flex h-[90vh] flex-col md:flex-row ">
      <div className="h-auto  md:h-full border-r border-r-[#3d3d3d] ">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <h1 className="mt-2 px-2 text-sm hidden md:block text-white">
          Copyright 2022 CodeDevOption
        </h1>
      </div>
      <div className="flex-1 w-full h-full flex flex-col ">
        <h1 className="text-white  text-xl font-semibold md:font-bold md:text-3xl ml-3 my-3">
          {selectedCategory} <span className="text-red-600">Video</span>
        </h1>
        <Videos selectedCategory={selectedCategory} videos={snippet.items} />
      </div>
    </div>
  );
};

export default Feed;

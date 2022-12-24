import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api/fetchData";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { snippet } from "../utils/constants/snippet";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const SearchFeed = ({ selectedCategory, setSelectedCategory }) => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetchData(`search?part=snippet&q=${searchTerm}`).then((res) => {
  //     setVideos(res.items);
  //     setLoading(false);
  //     console.log(res);
  //   });
  // }, [searchTerm]);

  if(loading) return <Spinner />
  return (
    <div className="flex h-[90vh]  w-full flex-col">
      <h1 className="text-white  text-xl font-semibold md:font-bold md:text-3xl ml-3 my-3">
        {searchTerm} <span className="text-red-600">Video</span>
      </h1>

      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;

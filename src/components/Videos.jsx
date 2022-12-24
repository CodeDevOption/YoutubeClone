import React from "react";
import { ChannelCard } from ".";
import VideoCard from "./VideoCard";


const Videos = ({ selectedCategory, videos }) => {
  return (
    <div className="w-full h-full flex flex-row flex-wrap  justify-center md:justify-center gap-2 overflow-x-hidden overflow-y-scroll ">
      {videos?.map((item, index) => (
        <div key={index} className="">
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;

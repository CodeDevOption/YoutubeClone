import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail);
  return (
    <Link
      to={
        channelDetail?.id?.channelId
          ? `/channel/${channelDetail?.id.channelId}`
          : `/channel/${channelDetail?.id}`
      }
    >
      <div className=" md:h-[400px] w-full md:w-[480px] hover:scale-105 rounded-md overflow-hidden transition-all duration-200 ease-in-out">
        <img
          src={channelDetail?.snippet.thumbnails?.medium.url}
          className="md:w-full max-w-[300px] mx-auto rounded-full "
          alt={channelDetail?.snippet.title}
        />
        <div className=" px-4 p-2 flex item-center justify-center ">
          <h2 className="text-white md:text-lg font-normal pt-3 flex items-center gap-2">
            {channelDetail?.snippet?.channelTitle ||
              channelDetail?.snippet?.title}{" "}
            <MdCheckCircle />
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;

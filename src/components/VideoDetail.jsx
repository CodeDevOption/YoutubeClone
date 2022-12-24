import React, { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/api/fetchData";
import VideoCard from "./VideoCard";

const VideoDetail = () => {
  const { id } = useParams();
  const [VideoDetail, setVideoDetail] = useState(null);
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    fetchData(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (res) => {
        setVideoDetail(res?.items[0]);
        console.log(res);
      }
    );
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (res) => {
        setVideo(res?.items);
      }
    );
  }, [id]);

  return (
    <div className="h-[90vh] flex md:flex-row flex-col">
      <div className="flex-1">
        <div className="h-[85%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="w-[700px]"
            width={"100%"}
            height={"100%"}
            controls
          />
          <div className="h-[15px] text-white p-3">
            <h1 className="w-full truncate  text-2xl font-bold">{VideoDetail?.snippet?.title}</h1>
            <div className="flex justify-between">
              <h4 className="flex gap-2 items-center font-semibold capitalize">channel Name <MdCheckCircle /></h4>
              <p className="flex gap-3 mr-2">
                <span>{VideoDetail?.statistics?.viewCount} views</span>
                <span>{VideoDetail?.statistics?.likeCount} Likes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[500px] md:overflow-x-hidden flex flex-col gap-4 md:overflow-y-scroll">
        {videos?.map((item, index) => (
          <VideoCard key={index} video={item} />
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;

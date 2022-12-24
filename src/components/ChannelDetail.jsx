import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/api/fetchData";
import { snippet as videos } from "../utils/constants/snippet";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetails] = useState(null);
  // const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   fetchData(`channels?part=snippet&id=${id}`).then((res) => {
  //     setChannelDetails(res.items[0]);
  //     setLoading(false);
  //   });
  //   fetchData(`search?part=snippet&channelId=${id}&order=date`).then((res) => {
  //     setVideos(res?.items);
  //   });
  // }, [id]);

  // if (loading) return <h1>Loading</h1>;
  // // console.log(videos);
  return (
    <div className="h-[90vh] overflow-y-scroll">
      <div className="w-full bg-gradient-to-r to-blue-400  from-pink-500 h-[20vh]" />
      <div className="w-full flex justify-center items-center -mt-24">
        <ChannelCard channelDetail={videos?.items[4]} />
      </div>
      <div className="mt-10 flex gap-4 flex-row flex-wrap justify-center">
        {videos?.items?.map((item, index) => (
          <VideoCard video={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChannelDetail;

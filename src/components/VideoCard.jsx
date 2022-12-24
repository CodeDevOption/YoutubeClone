import React from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (

    <Link to={videoId ? `/video/${videoId}`:demoChannelUrl}>
    <div className='bg-[#0e0e0e] md:h-[400px] w-full md:w-[480px] hover:scale-105 rounded-md overflow-hidden transition-all duration-200 ease-in-out'>
        <img src={snippet?.thumbnails?.medium.url} className='w-full ' alt="" />
        <div className="mt-3 px-4 p-2 ">
            <Link to={videoId ? `/video/${videoId}`:demoChannelUrl}>
                <h1 className='text-white md:text-xl font-medium  w-full'>{snippet?.title?.length > 60 ? snippet?.title?.slice(0,60).concat(' ...') : snippet?.title }</h1>
            </Link>
            <Link to={videoId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
                <h2 className='text-white md:text-lg font-normal pt-3 flex items-center gap-2'>{snippet?.channelTitle || demoChannelTitle} <MdCheckCircle /></h2>
            </Link>
        </div>
    </div>
    </Link>
  )
}   

export default VideoCard
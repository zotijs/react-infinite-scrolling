import React from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    return (
        <div className="video-list">
            {videos.map(video => <VideoItem key={video.id.videoId} video={video} />)}
        </div>
    );
};

export default VideoList;
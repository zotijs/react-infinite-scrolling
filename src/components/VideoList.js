import React from 'react';
import useVideos from '../useVideos';
import useScroller from '../useScroller';
import './VideoList.css';
import VideoItem from './VideoItem';

const VideoList = () => {
    const videos = useVideos({term: ''});
    const fetchItems = useScroller();


    if (fetchItems) {
        console.log('scrolled to bottom');
    }

    if (!videos) {
        return (
            <div className="ui active dimmer">
                <div className="ui text loader">Wait for it..</div>
            </div>
        );
    }

    return (
        <div className="video-list">
            {videos.map(video => <VideoItem key={video.id.videoId} video={video} />)}
        </div>
    );
};

export default VideoList;
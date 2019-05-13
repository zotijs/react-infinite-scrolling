import React from 'react';

const VideoItem = ({video}) => {
    return (
        <div className="ui card">
            <div className="image">
                <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            </div>
            <div className="content">
                <a href="_blank" className="header">{video.snippet.title}</a>
                <div className="description">
                    {video.snippet.description}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
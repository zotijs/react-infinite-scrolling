import React from 'react';
import useVideos from '../useVideos';
import SearchBar from './SearchBar';
import VideoList from '../components/VideoList';
import ErrorsList from '../components/ErrorsList';

const App = () => {
    const { videos, errors } = useVideos({term: '', token: '' });

    if (!videos) {
        return (
            <div className="ui active dimmer">
                <div className="ui text loader">Wait for it..</div>
            </div>
        );
    }
    
    return (
        <div>
            <SearchBar />
            <VideoList videos={videos}/>
            {errors && <ErrorsList title={`Error code: ${errors.code}`} errors={errors.errors}/>}
        </div>
    );
}

export default App;
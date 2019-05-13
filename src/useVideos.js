import { useState, useEffect } from 'react';
import youtube from './apis/youtube';


const useVideos = (args) => {
    const [videos, setVideos] = useState([]);

   useEffect(() => {
        (async args => {
            const response = await youtube.get('/search', {params: {q: args.term}});
            setVideos(response.data.items);
        })(args.term);
    }, [args.term]);

    return videos; 
};

export default useVideos;
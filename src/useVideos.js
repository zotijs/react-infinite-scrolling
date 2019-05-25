import { useState, useEffect } from 'react';
import youtube from './apis/youtube';


const useVideos = ({term, token = ''}) => {
    const [videos, setVideos] = useState([]);
    const [pageToken, setPageToken] = useState(token);
    const [isBottom, setIsBotom] = useState(false);
    const [errors, setErrors] = useState(null);


   useEffect(() => {
        fetchMoreVideos(term);
    }, [term]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            setIsBotom(true);
        }
      }

      //might not be needed
      useEffect(() => {
        if (!isBottom) {
            return;
        }

        fetchMoreVideos(term, pageToken);
      }, [isBottom, term, pageToken]);

      const fetchMoreVideos = async (term, token) => {
        try {
            const response = await youtube.get('/search', {params: {q: term, pageToken: token}});
            setVideos(videos => [...videos, response.data.items]);
            setPageToken(response.data.nextPageToken);
        }
        catch (error){
            setErrors(error.response.data.error);
        }

        setIsBotom(false);
      }

    return { videos, errors };
};

export default useVideos;
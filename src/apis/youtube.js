import axios from 'axios';

const KEY = 'secret_key_move_to_env';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 12,
        key: KEY
    }
});

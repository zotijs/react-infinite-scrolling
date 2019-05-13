import { useState, useEffect } from 'react';

const useScroller = () => {
    const [isBottom, setIsBotom] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    
      const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            setIsBotom(true);
        }
      }

      return isBottom;
};

export default useScroller;
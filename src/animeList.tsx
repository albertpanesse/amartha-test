import React, { useEffect, useState } from 'react';

const animeList = (Component: any) => {
  return (props: any) => {
    const [animes, setAnimes] = useState<Anime[]>([]);

    useEffect(() => {
      const fetchAnimes = async () => {
        const animesResponse = await fetch('https://api.jikan.moe/v4/anime', {
          method: 'GET',
        });
        const result: { data: Anime[]; pagination: any } = await animesResponse.json();
        if (result) {
          const animes: Anime[] = result.data;
          setAnimes(animes);
        }
      };

      fetchAnimes();
    }, []);

    return <Component animes={animes} {...props} />;
  };
};

export default animeList;

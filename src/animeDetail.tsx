import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const animeDetail = (Component: any) => {
  return (props: any) => {
    const { id } = useParams();

    const [anime, setAnime] = useState<Anime | null>(null);

    useEffect(() => {
      const fetchAnimes = async () => {
        const animesResponse = await fetch(`https://api.jikan.moe/v4/anime/${id}`, {
          method: 'GET',
        });
        console.log('animesResponse', animesResponse);
        const result: { data: Anime } = await animesResponse.json();
        if (result) {
          const anime: Anime = result.data;
          setAnime(anime);
        }
      };

      fetchAnimes();
    }, [id]);

    return <Component anime={anime} {...props} />;
  };
};

export default animeDetail;

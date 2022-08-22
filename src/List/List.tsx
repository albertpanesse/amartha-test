import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import animeList from '../animeList';

import './style.scss';

const List = function ({ animes }: { animes: Anime[] }) {
  const inputRef = useRef(null);

  const [keywords, setKeywords] = useState<string>('');
  const [numOfItems, setNumOfItems] = useState<number>(0);

  useEffect(() => {
    if (animes) {
      setNumOfItems(animes.length);
    }
  }, [animes]);

  const generatedAnimes = () => {
    return animes && numOfItems > 0
      ? animes
          .filter((anime) => {
            if (keywords) {
              const regex = new RegExp(keywords, 'i');
              return anime.title.match(regex);
            }

            return true;
          })
          .map((anime) => {
            return (
              <li key={`usr-${anime.mal_id}`}>
                <Link to={`/detail/${anime.mal_id}`}>{anime.title}</Link>
              </li>
            );
          })
      : [];
  };

  if (!animes || (animes && animes.length > 0)) {
    return (
      <div className='anime-list'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Search ...'
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <ul>{generatedAnimes()}</ul>
      </div>
    );
  } else {
    return (
      <div className='spinner'>
        <i className='fa fa-spinner' />
      </div>
    );
  }
};

export default animeList(List);

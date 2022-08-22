import React from 'react';
import { useNavigate } from 'react-router-dom';

import animeDetail from '../animeDetail';

import './style.scss';

const Detail = function ({ anime }: { anime: Anime }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/', { replace: true });
  };

  if (anime) {
    return (
      <div className='anime-detail card'>
        <div className='card-header'>
          <h1>{anime.title}</h1>
        </div>
        <div className='card-body'>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <p>{anime.background}</p>
        </div>
        <div className='card-footer'>
          <button className='btn btn-warning' onClick={onClick}>
            Back
          </button>
        </div>
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

export default animeDetail(Detail);

import React from 'react';
import './banner.scss'
import backgroundImg from '../../assets/img/home.jpg'


const Banner = () => {
    return (
        <div className='banner'>
        <div className='banner__image'>
          <div className='banner__gradient'></div>
          <img src={backgroundImg} alt='' />
        </div>
      
        <div className='banner__text'>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>      
    );
};

export default Banner;
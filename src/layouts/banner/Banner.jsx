import React from 'react'
import './banner.scss'

const Banner = ({ image, texte, isMobileAbout }) => {
  const bannerStyle = {
    height: isMobileAbout ? '225px' : '225' 
  };

  return (
    <div className="banner">
      <div className="banner__image" style={bannerStyle}>
        <div className="banner__gradient"></div>
        <img src={image} alt="Bannière de la page" />
      </div>

      <div className="banner__text">
        <h1>{texte}</h1>
      </div>
    </div>
  )
}

export default Banner
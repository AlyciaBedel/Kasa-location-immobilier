import React from 'react';
import './imageBanner.scss'
import backgroundImg from '../../assets/img/aboutBanner.jpg'

const ImageBanner = (props) => {
    const imageUrl = props.imageUrl ? props.imageUrl : backgroundImg;
    return (
        <div className='banner__img'>
			<img src={imageUrl} alt="" />
		</div>
    );
};

export default ImageBanner;
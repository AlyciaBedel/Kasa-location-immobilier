import React from 'react';
import './imageBanner.scss'


const ImageBanner = (props) => {
    return (
        <div className='banner__img'>
			<img src={props.imageUrl} alt="" />
		</div>
    );
};

export default ImageBanner;
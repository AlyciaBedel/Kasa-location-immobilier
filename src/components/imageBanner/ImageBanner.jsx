import { useState } from 'react';
import './imageBanner.scss'
import backgroundImg from '../../assets/img/aboutBanner.jpg'

const ImageBanner = (props) => {
    // const imageUrl = props.imageUrl ? props.imageUrl : {backgroundImg};

    const pictures = props.pictures; 

    const [currentPicture, setCurrentPicture] = useState(0);

    const getClassName = (i) => {
        if (i === currentPicture) return 'show';
        return '';
    };

    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    }

    const moveToPrevious = () => {
        setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length);
    };

    const arePicturesAvailable = () => {
        return pictures && pictures.length > 0;
    }

    const getCarouselOrDefaultImage = () => {
        if(!arePicturesAvailable()) {
            return <img src={backgroundImg} alt="" className='show'></img>;
        }
        return pictures.map((pic, i)=>(
            <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
        ));
    };

    return (
        <div className='banner__img'>
            <div className='img__container'>
              {getCarouselOrDefaultImage()}  
            </div>
            {arePicturesAvailable() && (
                <>
                    <button className='btn btn-next' onClick={moveToNext}><i className='fas fa-chevron-right'></i></button>
                    <button className='btn btn-previous' onClick={moveToPrevious}><i className='fas fa-chevron-left'></i></button>
                </>
            )}
		</div>
    );
};

export default ImageBanner;
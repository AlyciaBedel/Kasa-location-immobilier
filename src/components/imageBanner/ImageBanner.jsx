import { useState } from 'react';
import './imageBanner.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import backgroundImg from '../../assets/img/about.jpg'

const ImageBanner = (props) => {

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
                    <button className='btn btn-next' onClick={moveToNext}><FontAwesomeIcon icon={faChevronRight} /></button>
                    <button className='btn btn-previous' onClick={moveToPrevious}><FontAwesomeIcon icon={faChevronLeft} /></button>
                </>
            )}
		</div>
    );
};

export default ImageBanner;
import React from 'react';
import './about.scss'
import ImageBanner from '../../components/imageBanner/ImageBanner';
import DescriptionPanel from '../../components/descriptionPanel/DescriptionPanel';

const About = () => {
    return (
        <>
            <ImageBanner />
            <div className='about__container'>
                <DescriptionPanel/>
                <DescriptionPanel/>
                <DescriptionPanel/>
                <DescriptionPanel/>
            </div>
        </>
    );
};

export default About;
import React from 'react';
import Banner from '../../components/banner/Banner';
import ApartmentDescription from '../../components/apartmentDescription/ApartmentDescription';
import './about.scss'

const About = () => {
    return (
        <>
            <Banner />
            <div className='about__container'>
                <ApartmentDescription />
                <ApartmentDescription />
                <ApartmentDescription />
                <ApartmentDescription />
            </div>
        </>
    );
};

export default About;
import React from 'react';
import './about.scss'
import ImageBanner from '../../components/imageBanner/ImageBanner';
import DescriptionPanel from '../../components/descriptionPanel/DescriptionPanel';

const About = () => {
    return (
        <>
            <ImageBanner/>
            <div className='about__container'>
                <DescriptionPanel title="Fiabilité" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <DescriptionPanel title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <DescriptionPanel title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <DescriptionPanel title="Responsabilité" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            </div>
        </>
    );
};

export default About;
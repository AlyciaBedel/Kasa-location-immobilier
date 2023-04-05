import React from 'react';
import './about.scss'
import ImageBanner from '../../components/imageBanner/ImageBanner';
import DescriptionPanel from '../../components/descriptionPanel/DescriptionPanel';

const About = () => {
    const collapseContent = [
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    ];

    return (
        <>
            <ImageBanner/>
            <div className='about__container'>
                {collapseContent.map((content, index) => (
                    <DescriptionPanel key={index} title={index % 2 === 0 ? "Fiabilité" : "Respect"} content={content}/>
                ))}
            </div>
        </>
    );
};

export default About;

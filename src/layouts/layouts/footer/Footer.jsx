import React from 'react';
import './footer.scss'
import logoFooter from '../../assets/img/logoFooter.png'

const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="logo de l'entreprise Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
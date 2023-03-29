import React from 'react';
import { NavLink } from 'react-router-dom';
import './apartment.scss'

const Apartment = () => {
    return (
        <div className='apartment'>
            <NavLink to='/flat' className='apartment-block'>
                    <h2>Titre de la location</h2>
            </NavLink>
        </div>
    );
};

export default Apartment;
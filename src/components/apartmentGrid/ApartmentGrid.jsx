import React from 'react';
import Apartment from '../apartmentCard/Apartment';
import './apartmentGrid.scss'

const ApartmentGrid = () => {
    return (
        <div className='apartmentGrid'>
            <div className='apartmentGrid-block'>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
            </div>
        </div>
    );
};

export default ApartmentGrid;
import { useEffect, useState } from 'react';
import React from 'react';
import './apartmentGrid.scss';
import ApartmentCard from '../apartmentCard/Apartment';

const ApartmentGrid = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch('logements.json')
      .then(res => res.json())
      .then(res => setApartments(res))
      .catch(console.error);
  }, []);

  return (
    <div className='apartmentGrid'>
        <div className='apartmentGrid-block'>
            {apartments.map((apartment) => (
            <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id}/>
            ))}
        </div>
    </div>
);
};

export default ApartmentGrid;

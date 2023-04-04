import React from 'react';
import './apartmentHeader.scss';


const ApartmentHeader = ({flat}) => {
	
    return (
        <div className='apartmentSheet__container'>
					<div className='apartmentSheet__container-title'>
						<h1>{flat.title}</h1>
						<h2>{flat.location}</h2>
						<div className='apartmentSheet__containerTag'>
							{flat.tags.map((tag) => (<span className='apartmentSheet__containerTag-tag' key={tag}>{tag}</span>))}
						</div>
					</div>

					<div className='apartmentSheet__containerOwner'>

						<div className='apartmentSheet__containerOwner-profil'>
							<h3>{flat.host.name}</h3>
							<div className='apartmentSheet__containerOwner-profil--img'>
								<img src={flat.host.picture} alt="" />
							</div>
						</div>

						<div className='apartmentSheet__containerOwner-star'>

							{[1,2,3,4,5].map((num) => (
							<span className={flat.rating >= num ? "on" : " "} key={num}>★</span>
							))}
						</div>

					</div>

				</div>
    );
};

export default ApartmentHeader;
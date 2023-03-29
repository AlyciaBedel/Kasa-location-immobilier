import React from 'react';
import './apartmentSheet.scss'
import backgroundImg from '../../assets/img/apartmentSheet.jpg'
import starRed from '../../assets/img/redStar.png'
import starGrey from '../../assets/img/greyStar.png'
import ApartmentDescription from '../../components/apartmentDescription/ApartmentDescription';

const ApartmentSheet = () => {
	return (
		<div className='apartmentSheet'>
				<div className='apartmentSheet__img'>
					<img src={backgroundImg} alt="" />
				</div>

				<div className='apartmentSheet__container'>
					<div className='apartmentSheet__container-title'>
						<h1>Cozy loft on the Canal Saint-Martin</h1>
						<h2>Paris, Île-de-France</h2>
						<div className='apartmentSheet__containerTag'>
							<span className='apartmentSheet__containerTag-tag'>Cozy</span>
							<span className='apartmentSheet__containerTag-tag'>Canal</span>
							<span className='apartmentSheet__containerTag-tag'>Paris 10</span>
						</div>
					</div>

					<div className='apartmentSheet__containerOwner'>

						<div className='apartmentSheet__containerOwner-profil'>
							<h3>Alexandre Dumas</h3>
							<div className='apartmentSheet__containerOwner-profil--img'>
								<img src="" alt="" />
							</div>
						</div>

						<div className='apartmentSheet__containerOwner-star'>
							<img src={starRed} alt="" />
							<img src={starRed} alt="" />
							<img src={starRed} alt="" />
							<img src={starGrey} alt="" />
							<img src={starGrey} alt="" />
						</div>

					</div>

				</div>

				<div className='apartmentSheet__information'>
					<ApartmentDescription />
					<ApartmentDescription />
				</div>
		</div>
	);
};

export default ApartmentSheet;
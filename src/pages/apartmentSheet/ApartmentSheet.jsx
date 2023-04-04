import { useEffect, useState } from 'react';
import './apartmentSheet.scss'
import ImageBanner from '../../components/imageBanner/ImageBanner';
import { useLocation } from 'react-router-dom';
import ApartmentHeader from '../../components/apartmentHeader/ApartmentHeader';
import DescriptionPanel from '../../components/descriptionPanel/DescriptionPanel';

const ApartmentSheet = () => {

	const location = useLocation();
	console.log(location);

	const [flat, setFlat] = useState(null);
	useEffect(fetchApartmentData, []);

	function fetchApartmentData(){
		fetch('logements.json')
		.then (res => res.json())
		.then ((flats) => {
			const flat = flats.find((flat) => flat.id === location.state.apartmentId);
			setFlat(flat);
		})
		.catch(console.error)
	}

	if (!flat) return <div>Loading...</div>;

	return (
		 <div className='apartmentSheet'>
		 		<ImageBanner imageUrl={flat.cover}/>
		 		<ApartmentHeader flat={flat}/>

		 		<div className='apartmentSheet__information'>
		 			<DescriptionPanel title="Description" content={flat.description}/>
		 			<DescriptionPanel title="Équipements" content={flat.equipments.map((eq) => (<ul><li>{eq}</li></ul>))}/>
		 		</div> 
		 </div>
	);
};

export default ApartmentSheet;

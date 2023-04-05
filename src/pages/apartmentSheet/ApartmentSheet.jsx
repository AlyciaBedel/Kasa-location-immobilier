import { useEffect, useState } from 'react';
import './apartmentSheet.scss';
import ImageBanner from '../../components/imageBanner/ImageBanner';
import { useLocation } from 'react-router-dom';
import ApartmentHeader from '../../components/apartmentHeader/ApartmentHeader';
import Dropdown from '../../components/dropdown/Dropdown';

const ApartmentSheet = () => {

	const location = useLocation();
	console.log(location);

	const [flat, setFlat] = useState(null);
	useEffect(() => {
		function fetchApartmentData(){
			fetch('logements.json')
			.then (res => res.json())
			.then ((flats) => {
				const flat = flats.find((flat) => flat.id === location.state.apartmentId);
				setFlat(flat);
			})
			.catch(console.error)
		}
		fetchApartmentData();
	}, [location.state.apartmentId]);

	if (!flat) return <div>Loading...</div>;

	return (
		 <div className='apartmentSheet'>
		 		<ImageBanner pictures={flat.pictures}/>
		 		<ApartmentHeader flat={flat}/>

		 		<div className='apartmentSheet__information'>
		 			<Dropdown title="Description" content={flat.description}/>
		 			<Dropdown title="Équipements" content={flat.equipments.map((eq, i) => (<ul key={i}><li>{eq}</li></ul>))}/>
		 		</div> 
		 </div>
	);
};

export default ApartmentSheet;

import ApartmentGrid from '../../components/apartmentGrid/ApartmentGrid'
import Banner from '../../layouts/banner/Banner'

const Home = () => {
	return (
		<div className='home'>
			<Banner />
			<ApartmentGrid/>
		</div>
	);
};

export default Home;
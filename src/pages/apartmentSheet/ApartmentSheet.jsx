import { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import './apartmentSheet.scss';
import ApartmentHeader from '../../components/apartmentHeader/ApartmentHeader';
import Dropdown from '../../components/dropdown/Dropdown';
import Carrousel from '../../components/carrousel/Carrousel';

const ApartmentSheet = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [flat, setFlat] = useState(null);
  useEffect(() => {
    function fetchApartmentData() {
      fetch('../../logements.json')
        .then((res) => res.json())
        .then((flats) => {
          const flat = flats.find((flat) => flat.id === id);
          if (!flat) {
            navigate('/404');
          } else {
            setFlat(flat);
          }
        })
        .catch(console.error);
    }
    fetchApartmentData();
  }, [id, navigate]);

  if (!flat) return <div>Loading...</div>;

  return (
    <div className="apartmentSheet">
      <Carrousel pictures={flat.pictures} apartmentName={flat.title} />
      <ApartmentHeader flat={flat} />

      <div className="apartmentSheet__information">
        <Dropdown title="Description" content={flat.description} />
        <Dropdown
          title="Équipements"
          content={flat.equipments.map((eq, i) => (
            <ul key={i}>
              <li>{eq}</li>
            </ul>
          ))}
        />
      </div>
    </div>
  );
};

export default ApartmentSheet;

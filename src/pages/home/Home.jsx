import React from 'react'
import ApartmentGrid from '../../components/apartmentGrid/ApartmentGrid'
import Banner from '../../layouts/banner/Banner'
import bannerHome from '../../assets/img/home.jpg'

const Home = () => {
  return (
    <div className="home">
      <Banner image={bannerHome} texte="Chez vous, partout et ailleurs"/>
      <ApartmentGrid />
    </div>
  )
}

export default Home
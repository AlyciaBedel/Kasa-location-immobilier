import React from 'react'
import './apartmentHeader.scss'
import Tags from '../tags/Tags'
import Score from '../score/Score'

const ApartmentHeader = ({ flat }) => {
  const name = flat.host.name
  const [firstName, lastName] = name.split(' ')

  return (
    <div className="apartmentSheet__container">
      <div className="apartmentSheet__container-title">
        <h1>{flat.title}</h1>
        <h2>{flat.location}</h2>
        <Tags tags={flat.tags} />
      </div>

      <div className="apartmentSheet__containerOwner">
        <div className="apartmentSheet__containerOwner-profil">
          <h3>
            <span>{firstName}</span>
            <br></br>
            <span>{lastName}</span>
          </h3>

          <div className="apartmentSheet__containerOwner-profil--img">
            <img src={flat.host.picture} alt={`Profil de ${flat.host.name}`} />
          </div>
        </div>

        <Score rating={flat.rating} />
      </div>
    </div>
  )
}

export default ApartmentHeader
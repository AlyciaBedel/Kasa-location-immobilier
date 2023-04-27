import React from 'react'
import { NavLink } from 'react-router-dom'
import './apartmentCard.scss'

const Apartment = (props) => {
  return (
    <NavLink
      to={`/appartement/${props.id}`}
      state={{ apartmentId: props.id }}
      className="apartment__block"
    >
      <div className="apartment__block-img">
        <img src={props.imageUrl} alt={` ${props.title}`} />
      </div>
      <div className="apartment__block-title">
        <h2>{props.title}</h2>
      </div>
    </NavLink>
  )
}

export default Apartment
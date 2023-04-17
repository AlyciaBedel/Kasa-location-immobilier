import React from 'react'
import './score.scss'

const Score = ({ rating }) => {
  return (
    <div className="apartmentSheet__containerOwner-star">
      {[1, 2, 3, 4, 5].map((num) => (
        <span className={rating >= num ? 'on' : ''} key={num}>
          ★
        </span>
      ))}
    </div>
  )
}

export default Score
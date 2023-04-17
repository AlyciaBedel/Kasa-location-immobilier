import { useState } from 'react'
import './carrousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

const Carrousel = (props) => {
  const pictures = props.pictures
  const apartmentName = props.title || 'Image'

  const [currentPicture, setCurrentPicture] = useState(0)

  const getClassName = (i) => {
    if (i === currentPicture) return 'show'
    return ''
  }

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

  const moveToPrevious = () => {
    setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length)
  }

  return (
    <div className="banner__img">
      <div className="img__container">
        {pictures.map((pic, i) => (
          <img
            key={pic}
            src={pic}
            alt={apartmentName}
            className={getClassName(i)}
          />
        ))}
      </div>
      {pictures.length > 1 && (
        <button className="btn btn-previous" onClick={moveToPrevious}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {pictures.length > 1 && (
        <span className="slide-counter">
          {currentPicture + 1} / {pictures.length}
        </span>
      )}
      {pictures.length > 1 && (
        <button className="btn btn-next" onClick={moveToNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  )
}

export default Carrousel
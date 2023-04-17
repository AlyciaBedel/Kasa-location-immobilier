import React, { useState, useRef, useLayoutEffect } from 'react'
import './dropdown.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  useLayoutEffect(() => {
    const content = contentRef.current
    const height = content.scrollHeight
    setContentHeight(height)
    content.style.maxHeight = isOpen ? `${height}px` : '0px'
  }, [isOpen])

  const toggleContent = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setIsOpen(!isOpen)
      setTimeout(() => {
        setIsAnimating(false)
      }, 500)
    }
  }

  const chevronClass = `chevron ${isOpen ? 'open' : 'close'} ${
    isAnimating ? 'animating' : ''
  }`

  return (
    <div className="panel__description">
      <div className="panel__description-header" onClick={toggleContent}>
        <span>{props.title}</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={chevronClass}
          style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})` }}
        />
      </div>

      <div
        className={`panel__description-content ${isOpen ? 'open' : 'close'}`}
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <div className="panel__description-text">{props.content}</div>
      </div>
    </div>
  )
}

export default Dropdown
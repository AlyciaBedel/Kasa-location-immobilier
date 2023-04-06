import React, { useState } from 'react';
import './dropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="panel__description">
      <p className="panel__description-header" onClick={toggleContent}>
        <span>{props.title}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </p>

      <div className={`panel__description-content ${isOpen ? 'open' : 'close'}`}>
        {props.content}
      </div>
    </div>
  );
};

export default Dropdown;

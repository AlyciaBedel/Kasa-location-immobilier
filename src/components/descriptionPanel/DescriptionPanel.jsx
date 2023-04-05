import React, { useState } from 'react';
import './descriptionPanel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const DescriptionPanel = (props) => {
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

      {isOpen && (
        <div className="panel__description-content">
          {props.content}
        </div>
      )}
    </div>
  );
};

export default DescriptionPanel;


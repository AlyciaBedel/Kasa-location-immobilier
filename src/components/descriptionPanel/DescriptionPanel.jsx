import React, { useState } from 'react';
import './descriptionPanel.scss';

const DescriptionPanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="panel__description">
      <p className="panel__description-header" onClick={toggleContent}>
        <span>{props.title}</span>
        <i className={`fas fa-chevron-${isOpen ? 'down' : 'up'}`}></i>
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


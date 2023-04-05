import React from 'react';
import './tags.scss';

const Tags = ({ tags }) => {
  return (
    <div className='apartmentSheet__containerTag'>
      {tags.map((tag) => (
        <span className='apartmentSheet__containerTag-tag' key={tag}>{tag}</span>
      ))}
    </div>
  );
};

export default Tags;
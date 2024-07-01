import React from 'react';

const Place = ({ name, description, image }) => {
  return (
    <div className="place">
      <img src={image} alt={name} className="place-image" />
      <div className="place-details">
        <h2 className="place-name">{name}</h2>
        <p className="place-description">{description}</p>
      </div>
    </div>
  );
};

export default Place;

// src/components/BeerCard/BeerCard.js
import React from 'react';
import './BeerCard.css';

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.style}</p>
      <p>{beer.abv}% ABV</p>
    </div>
  );
}

export default BeerCard;

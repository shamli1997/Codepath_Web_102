// Card.js
import React from 'react';
import './card.css';

const Card = (props) => {
    const { img_url, dish_name, origin } = props;
  return (
    <div className="card">
      <img src={img_url} alt={dish_name} className="card-image"/>
      <h2>{dish_name}</h2>
      <p>{origin}</p>
      <button>View Menu</button>
    </div>
  );
};

export default Card;

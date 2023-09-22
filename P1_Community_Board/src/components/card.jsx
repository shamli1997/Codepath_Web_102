// Card.js
import React from 'react';
import './card.css';

const Card = (props) => {
    const { img_url, dish_name, origin, menu_url} = props;
  return (
    <div className="card">
      <img src={img_url} alt={dish_name} className="card-image"/>
      <h2>{dish_name}</h2>
      <p>{origin}</p>
      <a href={menu_url} target="_blank" rel="noopener noreferrer">
        <button>View Menu</button>
      </a>

    </div>
  );
};

export default Card;

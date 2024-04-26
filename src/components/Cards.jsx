import React from 'react';
import './Cards.css';

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  
  return (
    <div className="cards">
      
      <div className="image_box">
        <img src={img} alt='image'/>
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p><span>MRP : ₹ </span>{price}</p>
        <button className="add_to_cart" onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Cards;



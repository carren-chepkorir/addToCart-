import React from "react";

const Cards = ({ item, handleClick }) => {
  const { id, name, cost, image, amount } = item;
  return (
    <div className="cards">
      <div className="image-box">
        <img src={image} alt={image}></img>
      </div>
      <div className="details">
        <p>{id}</p>
        <p>{name}</p>
        <p>${cost}</p>

        <button onClick={() => handleClick(item)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Cards;

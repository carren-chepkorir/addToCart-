import React, { useState } from "react";

const Carts = ({ cart, setCart }) => {
  const [price, setPrice, handleChange] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  return (
    <article>
      {cart.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={item.image} />
          </div>
          <p>{item.name}</p>
          <button className="button" onClick={() => handleChange(item, +1)}>
            +
          </button>
          <button className="button">{item.amount}</button>
          <button className="button" onClick={() => handleChange(item, -1)}>
            -
          </button>
          <span>{item.cost}</span>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <div>
        <span>Total price of your cart</span>
        <span>${price}</span>
      </div>
    </article>
  );
};

export default Carts;

import React from "react";

const Navbar = ({ size, setShow }) => {
  console.log("carts");
  return (
    <div>
      <div className="blog">
        <h1 className="header" onClick={() => setShow(true)}>
          Beauty Products
        </h1>
        <div className="cart">
          <button onClick={() => setShow(false)}>Cart Item</button>
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

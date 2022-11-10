import "./App.css";

import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Carts from "./components/Carts";

const App = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind] += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };
  return (
    <div>
      <div className="blog">
        <Navbar size={cart.length} setShow={setShow} />
      </div>
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Carts cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
};

export default App;

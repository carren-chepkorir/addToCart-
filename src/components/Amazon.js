import React from "react";

import List from "../Data";
import Cards from "./Cards";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {List.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;

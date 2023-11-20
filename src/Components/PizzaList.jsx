import React from "react";
import PizzaItem from "./PizzaItem";
import { data } from "../data";
function PizzaList() {
  return (
    <div className="pizza-container">
      {data.map((pizza, index) => (
        <PizzaItem key={index} {...pizza} />
      ))}
    </div>
  );
}

export default PizzaList;

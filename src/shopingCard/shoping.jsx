import React, { useState } from "react";
import { shopping } from "./phonedata";
import Cardsho from "./cardshoping";
function Shopping() {
  return (
    <>
      <div className="">
        <h1>Shopping Cart</h1>
        <p>Current Credits : $</p>
        <p>TOTAL : $</p>
      </div>

      {shopping.map((items) => (
        <Cardsho key={items.id} name={items.name} price={items.price} />
        
      ))}
    </>
  );
}

export default Shopping;

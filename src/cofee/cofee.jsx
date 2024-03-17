import React, { useState } from "react";

export default function Coffee() {
  const [coffee, setCoffee] = useState("");
  const [coffee1, setCoffee1] = useState("");
  const drinks = ["coffee", "tea", "cappuccino", "espresso"];
  const boissons = () => {
    if (drinks.includes(coffee)) setCoffee1(`vous avez choisi : ${coffee}`);
    else setCoffee1(`votre demande : ${coffee} n'est pas disponible`);
  };

  return (
    <>
      <div className="map">
        <h1>menu :</h1>
        {drinks.map((drink, index) => (
          <div key={index}>
            <p>{drink}</p>
          </div>
        ))}
      </div>
      <h1>Coffee Shop</h1>
      <p>Client</p>
      {/* <p>{drinks}</p>
      <p>{coffee1}</p> */}
      <input
        type="text"
        placeholder="Enter your order"
        value={coffee}
        onChange={(e) => setCoffee(e.target.value)}
      />
      <button onClick={boissons}>Send</button>
      <div className="serveur">
        <h2>serveur</h2>
        <p>{coffee1}</p>
      </div>
          
    </>
  );
}

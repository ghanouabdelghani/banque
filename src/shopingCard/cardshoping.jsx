import { useState } from "react";
import "./cardsho.css";
import Shopping from "./shoping";

function Cardsho({ name, imageUrl, price }) {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);

  return (
    <>
    
      <div className="cards">
        <p>name : {name}</p>
        <p>price: {price}</p>
        {/* <p>{count1}</p> */}
        <p>{count2}</p>

        {/* <img src={imageUrl} alt="product" /> */}

        <input
          type="Number"
          placeholder="number"
          onChange={(e) => setcount1(e.target.value)}
        />
        <button onClick={() => setcount2([count1] * price)}>X</button>

        {/* <button onClick={() => setcount1([count2])}>click</button> */}
      </div>
    </>
  );
}

export default Cardsho;

import React, { useState } from "react";

function Banque({ name, onClick }) {
  const [banque1, setBanque1] = useState("");

  const handleOperation = () => {
    const amount = parseInt(banque1);
    if (!isNaN(amount)) {
      onClick(name, amount);
      setBanque1("");
    }
  };

  return (
    <div className="box">
      <p>{name}</p>
      <input
        type="number"
        placeholder="Enter an amount"
        value={banque1}
        onChange={(e) => setBanque1(e.target.value)}
      />
      <button onClick={handleOperation}>{name}</button>
    </div>
  );
}

export default Banque;

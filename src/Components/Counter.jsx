import React, { useState } from "react";
import "../Components/Counter.css";

export default function Counter() {
  const [add, setAdd] = useState(1);
  function countAdd() {
    setAdd(add + 1);
  }
  const [minus, setMinus] = useState(1);
  function countMinus() {
    setMinus(minus - 1);
  }
  const [double, setDouble] = useState(1);
  function countDouble() {
    setDouble(double * 2);
  }
  return (
    <div>
      <div className="add">
        <p>ADD</p>
        <p>{add}</p>
        <button onClick={countAdd}>ADD Button</button>
      </div>
      <div className="minus">
        <p>MINUS</p>
        <p>{minus}</p>
        <button onClick={countMinus}>MINUS Button</button>
      </div>
      <div className="double">
        <p>DOUBLE</p>
        <p>{double}</p>
        <button onClick={countDouble}>DOUBLE Button</button>
      </div>
    </div>
  );
}

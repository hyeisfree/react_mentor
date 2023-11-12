import React, { useState } from "react";
import "../Components/Counter.css";

export default function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div className="add">
        <p>ADD</p>
        <p>{count}</p>
        <button>ADD Button</button>
      </div>
      <div className="minus">
        <p>MINUS</p>
        <p>{count}</p>
        <button>MINUS Button</button>
      </div>
      <div className="double">
        <p>DOUBLE</p>
        <p>{count} j</p>
        <button>DOUBLE Button</button>
      </div>
    </div>
  );
}

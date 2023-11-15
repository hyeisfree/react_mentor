import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div
        onClick={() => {
          console.log(setCount);
        }}
        className="n"
      >
        {count}
      </div>
    </div>
  );
}

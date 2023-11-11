import React, { useState } from "react";

export default function AppProfile() {
  const [card, setCard] = useState({
    name: "Nahye",
    from: "likelion_BUFS",
    title: "menti",
  });
  return (
    <div>
      <h2>{card.name}</h2>
      <span>{card.from}</span>
      <p>{card.title}</p>
    </div>
  );
}

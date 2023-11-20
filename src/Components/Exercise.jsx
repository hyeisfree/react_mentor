import React, { useEffect, useState } from "react";

export default function Exercise() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링 될 때마다 매번 실행됨 - 실행 이후
  useEffect(() => {
    console.log("매번 실행되는 렌더링");
  });

  // 맨 처음 화면에 마운팅 될 때만 실행됨
  useEffect(() => {
    console.log("한 번만 실행되는 렌더링");
  }, []);

  // 마운팅 + count가 변경될 때만 실행됨
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  // 마운팅 + name 변경될 때만 실행됨
  useEffect(() => {
    console.log("name 변화");
  }, [name]);
  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange}></input>
      <span>name: {name}</span>
    </div>
  );
}

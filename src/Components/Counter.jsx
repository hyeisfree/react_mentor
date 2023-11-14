import React, { useState } from "react";
import "../Components/Counter.css";
/*
useState란 상태를 추가하고 관리할 수 있게 해주는 hook. 상태란 시간이 지남에 따라 변할 수 있는 값으로
이 값을 저장하고 관리할 때 사용 -> useState.

const [상태 변수, 상태 변경 함수] = useState(초기값);

useState에 초기 상태 값을 매개변수 값으로 호출하면 배열이 반환됨.
*/

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

import React, { useState } from "react";
import "../Components/Counter.css";
/*
useState란 상태를 추가하고 관리할 수 있게 해주는 hook. 상태란 시간이 지남에 따라 변할 수 있는 값으로
이 값을 저장하고 관리할 때 사용 -> useState.

const [상태 변수, 상태 변경 함수] = useState(초기값);

useState에 초기 상태 값을 매개변수 값으로 호출하면 배열이 반환됨.
ex) 
import React, { useState } from "react"; - 1 useState hook을 사용하기 위해 react로부터 useState를 import 해주기
const [add, setAdd] = useState(1); - 2 상태변수로 add, 상태 변경 함수 setAdd로 설정하고, 초기값으로 1로 설정하기
function countAdd() {
  setAdd(add + 1);
} - 3 countAdd 라는 함수를 만들고, add + 1을 한 후, setAdd에 add + 1을 한 값을 넣어준다
<p>{add}</p>
<button onClick={countAdd}>ADD Button</button> - 4
<p>{add}</p> 에는 현재 상태의 값을 나타내주고,
<button onClick={countAdd}>ADD Button</button> 버튼을 클릭할 때마다,
countAdd 함수가 실행되어 <p>{add}</p> 리렌더링 되어 add 값이 1씩 증가하여 ui에 나타난다

내 의문점
Q. 하나의 useState 함수를 사용하여 여러 개의 상태 값을 관리할 수 있는 방법 없나? 3개의 값을 관리한다면, 3개의 함수를 만들면 되지 않을까?
A. 불가함, 하나의 useState 함수는 하나의 상태 값만 관리할 수 있으므로 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러 번 사용해야함
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

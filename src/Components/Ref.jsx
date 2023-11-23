/* useState는 state의 값이 달라질 때마다 컴포넌트가 리렌더된다. 
useRef는 ref 값이 변한다고 컴포넌트가 리렌더되지 않는다.
*/

import React, { useEffect, useState } from "react";

function Ref() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      //setInterval로 timer를 세팅하고 컴포넌트가 사라질 때 clearInterval로 timer를 정리.
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  // useEffect 두 번째 인자에 빈 배열을 넣어 componentDidMount와 같이 timer 함수를 한 번만 세팅함.
  // useEffect 두 번재 인자에 빈 배열을 넣을 경우 렌더링 후 한 번만 실행되기 때문에 setState의 업데이트 함수(setCount(prev => prev + 1))를 활용하여 구현.
  // 업데이트 함수 setCount(prev => prev + 1) 사용한 경우 prev는 항상 최신 상태 값을 가져오는 것을 보장할 수 있음.
  // setState(count + 1)을 사용할 경우 초기 count 값만을 가져오기 때문에 count가 1에서 멈춰버림.
  /* 문제점: 업데이트 함수인 setState를 사용해서 상태 변경에서는 count 업데이트를 할 수 있지만 props가 변경된 경우에는 타이머 함수가 실행되지 않음.
  useEffect 두 번째 인자에 빈 배열을 넣어 timer 함수를 한 번만 세팅했기 때문입니다.
  */
  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}

export default Ref;

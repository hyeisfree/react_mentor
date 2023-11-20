/* useEffect 함수는 리액트 컴포넌트가 렌더링 될 때 마다 특정 작업을 실행할 수 있도록 하는 hook
useEffect는 컴포넌트가 mount 됐을 때, component가 unmount 됐을 때, component가 update 됐을 때
특정 작업을 처리할 수 있다
-> 클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형 컴포넌트에서도 사용할 수 있게 됨
사용 형태 : useEffect(function, deps)
function : 수행하고자 하는 작업, deps: 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열
*/

import React, { useEffect } from "react";

export default function Exercise() {
  useEffect(() => {
    console.log("마운트 될 때만 실행된다");
  }, []); // 컴포넌트가 화면에 가장 처음 렌더링 될 때 한 번만 실행하고 싶을 때, deps 위치에 빈 배열을 넣음, 배열 생략하면 리렌더링 될 때마다 실행됨
  return <div></div>;
}

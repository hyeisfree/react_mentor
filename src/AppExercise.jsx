import React, { useState } from "react";

export default function AppExercise() {
  const [person, setPerson] = useState({
    // 객체: 참조값 vs const [count, setCount] = useState(0); 숫자 원시값같은 경우는 바로 값을 바꿀 수 있음.
    name: "나혜",
    title: "2024년의 saffy학생",
    mentor: {
      name: "엘리",
      title: "간지나는 풀스택 개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          let name = prompt("멘토의 이름은 무엇인가요?"); //prompt에 받아온 값을 nam에 할당하고
          setPerson((person) => ({
            ...person, //setPerson 이라는 콜백함수에서 person이라는 똑같은 객체를 가져와서 mentor라는 객체를 가져오고(객체를 바로 가져와서 값을 업데이트할 수 없기 때문에, 스프레드 연산자(...)를 사용함.)
            mentor: {
              ...person.mentor,
              name: name, // 앞에 name은 person.mentor의 키이고, 뒤의 name은 prompt로 받아오는 name 값임. 리액중첩 상태 객체 관리에 대해서 좀 더 자세히 알아보자
            },
          }));
        }}
      >
        멘토의 이름 바꾸기
      </button>
      <button
        onClick={() => {
          let title = prompt("멘토의 타이틀은 무엇인가요?");
          setPerson((person) => ({
            ...person,
            mentor: {
              ...person.mentor,
              title: title,
            },
          }));
        }}
      >
        멘토의 타이틀 바꾸기
      </button>
    </div>
  );
}

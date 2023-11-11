import React from "react";

export default function AppProfile() {
  function Card({ name, age, title }) {
    return (
      <div>
        <p>{name}</p>
        <span>{age}</span>
        <p>{title}</p>
      </div>
    );
  }
  return (
    <div>
      <Card name={"김나혜"} age={23} title={"멋쟁이사자차럼 멘티"} />
      <Card name={"음뽀챠무"} age={1} title={"귀요미1"} />
      <Card name={"빤쮸토끼"} age={1} title={"귀요미2"} />
    </div>
  );
}

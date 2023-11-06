import React, { useState } from "react";

export default function AppTravel() {
  const [wishlist, setWishlist /* eslint-disable-line no-unused-vars */] =
    useState({
      nickname: "",
      travels: [
        {
          city: "도쿄",
          place: "아키하바라",
          season: "여름",
        },
        {
          city: "상하이",
          place: "동방명주",
          season: "가을",
        },
        {
          city: "홍콩",
          place: "스카이100 홍콩",
          season: "여름",
        },
        {
          city: "라스베이거스",
          place: "레드 록 캐니언",
          season: "여름",
        },
        {
          city: "제주도",
          place: "서귀포",
          season: "가을",
        },
      ],
    });
  return (
    <div>
      <h1>Let's make Travel Wishlist</h1>
      <p>{wishlist.nickname}님의 희망 여행지 리스트를 만들어봤어요!</p>
      {wishlist.travels.map((travel, index) => (
        <ul>
          <li>{travel.city}</li>
          <li>{travel.place}</li>
          <li>{travel.season}</li>
        </ul>
      ))}
      <button onClick={() => {}}>여행지 변경하기</button>
      <button onClick={() => {}}>여행지 추가하기</button>
      <button onClick={() => {}}>여행지 삭제하기</button>
    </div>
  );
}

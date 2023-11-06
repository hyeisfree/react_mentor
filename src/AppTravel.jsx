import React, { useState } from "react";

export default function AppTravel() {
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [wishlist, setWishlist] = useState({
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

  function travel__click(idx) {
    setSelectedTravel(idx);
  }

  function OnDelete(idx, wishlist) {
    if (idx !== null) {
      const updateTravels = wishlist.travels.filter((_, i) => i !== idx);
      const updatedWishlist = { ...wishlist, travels: updateTravels };
      setWishlist(updatedWishlist);
    }
  }

  function OnAdd() {
    const addCity = prompt("도시 이름을 설정하세요");
    const addPlace = prompt("장소를 설정해주세요");
    const addSeason = prompt("계절을 설정해주세요");

    if (addCity && addPlace && addSeason) {
      const newTravel = {
        city: addCity,
        place: addPlace,
        season: addSeason,
      };

      const newWishList = {
        ...wishlist,
        travels: [...wishlist.travels, newTravel],
      };

      setWishlist(newWishList);
    }
  }

  function OnChange(idx) {
    if (idx !== null) {
      const changeCity = prompt("도시 이름을 설정하세요");
      const changePlace = prompt("장소를 설정해주세요");
      const changeSeason = prompt("계절을 입력해주세요");

      if (changeCity && changePlace && changeSeason) {
        const updatedTravels = [...wishlist.travels];
        updatedTravels[idx] = {
          city: changeCity,
          place: changePlace,
          season: changeSeason,
        };

        const updatedWishlist = {
          ...wishlist,
          travels: updatedTravels,
        };

        setWishlist(updatedWishlist);
      }
    }
  }

  return (
    <div>
      <h1>Let's make Travel Wishlist</h1>
      <p>{wishlist.nickname}님의 희망 여행지 리스트를 만들어봤어요!</p>
      {wishlist.travels.map((travel, idx) => (
        <ul
          onClick={() => travel__click(idx)}
          style={{
            backgroundColor: selectedTravel === idx ? "lightblue" : "white",
            cursor: "pointer",
          }}
        >
          <li>{travel.city}</li>
          <li>{travel.place}</li>
          <li>{travel.season}</li>
        </ul>
      ))}
      <button onClick={() => OnChange(selectedTravel)}>여행지 변경하기</button>
      <button onClick={() => OnAdd()}>여행지 추가하기</button>
      <button onClick={() => OnDelete(selectedTravel, wishlist)}>
        여행지 삭제하기
      </button>
    </div>
  );
}

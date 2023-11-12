import React, { useState, useEffect } from "react";
import "../src/AppTravel.css";

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

  useEffect(() => {
    if (wishlist.nickname === "") {
      const newNickname = prompt("이름을 입력 해주세요");
      if (newNickname) {
        setWishlist({ ...wishlist, nickname: newNickname });
      }
    }
  }, [wishlist.nickname]);

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
    <div className="travel">
      <div className="travel__title">
        <h1>Let's make Travel Wishlist</h1>
      </div>
      <main className="travel__main">
        <p>{wishlist.nickname}님의 희망 여행지 리스트를 만들어봤어요!</p>
        <div className="main__center">
          {wishlist.travels.map((travel, idx) => (
            <ul
              className="travel__list"
              onClick={() => travel__click(idx)}
              style={{
                backgroundColor:
                  selectedTravel === idx
                    ? "rgb(52, 58, 55)"
                    : "rgb(239, 239, 239)",
                color: selectedTravel === idx ? "color: white" : "color: black",
                cursor: "pointer",
              }}
            >
              <li>{travel.city}</li>
              <li>{travel.place}</li>
              <li>{travel.season}</li>
            </ul>
          ))}
        </div>
        <div className="buttons">
          <button className="change" onClick={() => OnChange(selectedTravel)}>
            여행지 변경하기
          </button>
          <button className="add" onClick={() => OnAdd()}>
            여행지 추가하기
          </button>
          <button
            className="delete"
            onClick={() => OnDelete(selectedTravel, wishlist)}
          >
            여행지 삭제하기
          </button>
        </div>
      </main>
    </div>
  );
}

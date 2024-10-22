import React from "react";
import Heart from "../../assets/heart.svg";

function Favorite({ onClickHanlder }) {
  return (
    <button
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onClickHanlder}
    >
      <img src={Heart} alt="" />
      <span>Favourite Locations</span>
    </button>
  );
}

export default Favorite;

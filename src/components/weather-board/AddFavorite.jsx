import React, { useContext, useEffect, useState } from "react";
import RedHeart from "../../assets/heart-red.svg";
import Heart from "../../assets/heart.svg";
import { FavoriteContext } from "../../context";
import useWeather from "../../hooks/useWeather";

function AddFavorite(props) {
  const { favorites, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const { weatherData } = useWeather();

  useEffect(() => {
    const favorite = favorites.find(
      (fav) => fav.location === weatherData.location
    );
    if (favorite) {
      console.log(favorite);
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, weatherData.location]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(weatherData.location);
    } else {
      addToFavorite(
        weatherData.latitude,
        weatherData.longitude,
        weatherData.location
      );
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={toggleFavorite}
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? RedHeart : Heart} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AddFavorite;

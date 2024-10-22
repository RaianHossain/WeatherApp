import React, { useState } from "react";
import Favorite from "./Favorite";
import FavoriteList from "./FavoriteList";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

function Header(props) {
  const [showFavorites, setShowFavorites] = useState(false);
  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <SearchForm />
          <Favorite onClickHanlder={toggleShowFavorites} />

          {showFavorites && <FavoriteList />}
        </div>
      </nav>
    </header>
  );
}

export default Header;

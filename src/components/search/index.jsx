import React from "react";
import "./style.css";

function Search() {
  return (
    <>
      <div className="search__section">
        <div className="search__form">
          <div className="search__input">
            <input type="text" placeholder="search Movie" />
          </div>
          <div className="search__button">
            <button>클릭</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;

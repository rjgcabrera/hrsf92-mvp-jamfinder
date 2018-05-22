import React from 'react';

let Header = () => (
  <div className="header">
    <h1>♬ JamFinder</h1>
    <span id="event-search-bar">
      <input id="search-input" type="text" />
      <button id="search-button">Search</button>
    </span>
    <img id="profile-pic" src="../img/user.png"></img>
  </div>
);

export default Header;

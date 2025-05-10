import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [showMeme, setShowMeme] = useState(false);
  const [traits, setTraits] = useState({
    entrepreneur: false,
    businessWoman: false,
    fashionDiva: false,
    coolestMom: false,
    sharesReels: false,
    sarcasticReplies: false,
    friendsPermission: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTraits((prevTraits) => ({
      ...prevTraits,
      [name]: checked,
    }));
  };

  const handleYesClick = () => {
    setShowMeme(true);
  };

  const handleNoClick = () => {
    const noButton = document.getElementById("noButton");
    noButton.classList.add("runaway");
    setTimeout(() => {
      noButton.classList.remove("runaway");
    }, 1500); // Reset after 1.5 seconds
  };

  return (
    <div className="app">
      <h1 className="wish">Happy Mother's Day, Mom!</h1>
      <div className="traits">
        <h3>Traits</h3>
        <ul>
          <li>
            <input
              type="checkbox"
              name="entrepreneur"
              checked={traits.entrepreneur}
              onChange={handleCheckboxChange}
            />{" "}
            Entrepreneur
          </li>
          <li>
            <input
              type="checkbox"
              name="businessWoman"
              checked={traits.businessWoman}
              onChange={handleCheckboxChange}
            />{" "}
            Business Woman
          </li>
          <li>
            <input
              type="checkbox"
              name="fashionDiva"
              checked={traits.fashionDiva}
              onChange={handleCheckboxChange}
            />{" "}
            Fashion Diva
          </li>
          <li>
            <input
              type="checkbox"
              name="coolestMom"
              checked={traits.coolestMom}
              onChange={handleCheckboxChange}
            />{" "}
            Coolest Mom
          </li>
          <li>
            <input
              type="checkbox"
              name="sharesReels"
              checked={traits.sharesReels}
              onChange={handleCheckboxChange}
            />{" "}
            Mom who shares reels
          </li>
          <li>
            <input
              type="checkbox"
              name="sarcasticReplies"
              checked={traits.sarcasticReplies}
              onChange={handleCheckboxChange}
            />{" "}
            Sarcastic Mindblowing Replies
          </li>
          <li>
            <input
              type="checkbox"
              name="friendsPermission"
              checked={traits.friendsPermission}
              onChange={handleCheckboxChange}
            />{" "}
            Me ani mazhe friends firayla jua ka?
          </li>
        </ul>
      </div>
      <div className="buttons">
        <button id="yesButton" onClick={handleYesClick}>Yes</button>
        <button id="noButton" onClick={handleNoClick}>No</button>
      </div>
      {showMeme && (
        <img
          src="/shinchan-meme.jpg"
          alt="Shinchan Meme"
          className="meme"
        />
      )}
    </div>
  );
};

export default App;

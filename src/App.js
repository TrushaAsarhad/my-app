import React, { useState } from 'react';
import './App.css';

function App() {
  // Track if meme should be shown or not
  const [showMeme, setShowMeme] = useState(false);

  // Track if the 'No' button was clicked (to make it move away)
  const [isNoButtonClicked, setIsNoButtonClicked] = useState(false);

  // List of wishes (randomly selected)
  const wishes = [
    "Happy Mother's Day! You're the best mom ever!",
    "Wishing you a beautiful day filled with love, laughter, and happiness!",
    "To the most amazing mom, Happy Mother's Day!",
    "You make the world a better place. Happy Mother's Day!",
    "Here's to the woman who does it all – Happy Mother's Day!"
  ];

  // Randomly pick a wish
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

  // Handle "Yes" button click (show meme)
  const handleYesClick = () => {
    setShowMeme(true);
  };

  // Handle "No" button click (move away randomly)
  const handleNoClick = () => {
    setIsNoButtonClicked(true);

    // Generate random position for the "No" button to move away
    const randomX = Math.floor(Math.random() * 80) + 10; // Random X position between 10% and 90% of the screen
    const randomY = Math.floor(Math.random() * 80) + 10; // Random Y position between 10% and 90% of the screen

    document.querySelector('.runaway').style.transform = `translate(${randomX}%, ${randomY}%)`;

    // Allow it to move again after a short time
    setTimeout(() => setIsNoButtonClicked(false), 100); // Allow it to move again after a short time
  };

  return (
    <div className="app">
      <div className="wish">{randomWish}</div>

      <div className="traits">
        <h2>Some amazing traits of my mom:</h2>
        <ul>
          <li>Entrepreneur</li>
          <li>Businesswoman</li>
          <li>Fashion Diva</li>
          <li>Coolest Mom</li>
          <li>Mom who shares reels & relates to memes</li>
          <li>Iconic sarcastic replies!</li>
        </ul>
      </div>

      <div className="permission">
        <h3>Me and my friends firayla jua ka?</h3>
        <div className="buttons">
          <button
            className={isNoButtonClicked ? 'runaway' : ''}
            onClick={handleNoClick}
          >
            No
          </button>
          <button onClick={handleYesClick}>Yes</button>
        </div>
      </div>

      {showMeme && <img src="/shinchan-meme.jpg" alt="Shinchan Meme" className="meme" />}
    </div>
  );
}

export default App;

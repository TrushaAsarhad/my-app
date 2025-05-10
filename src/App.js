import React, { useState, useEffect } from 'react';
import './App.css';

const wishes = [
  "Happy Mother’s Day to the queen of our hearts!",
  "You’re not just a mom, you’re a superhero!",
  "Thanks for being my best friend, mummy!",
  "You’re my favorite human, always have been!",
  "Wishing you laughter, love, and lots of memes today!",
];

const tags = [
  "Entrepreneur",
  "Coolest Mom",
  "Fashion Diva",
  "Sarcastically Brilliant",
  "Shares Reels, Understands Memes"
];

function App() {
  const [wish, setWish] = useState('');
  const [noButtonStyle, setNoButtonStyle] = useState({});

  useEffect(() => {
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setWish(randomWish);
  }, []);

  const moveNoButton = () => {
    const top = Math.floor(Math.random() * 200);
    const left = Math.floor(Math.random() * 200);
    setNoButtonStyle({
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
    });
  };

  return (
    <div className="app">
      <img src="/shinchan-meme.jpg" alt="Shinchan Meme" className="meme-img" />
      <h1>Happy Mother's Day, Mummy! 💖</h1>
      <p className="wish">{wish}</p>

      <div className="checkboxes">
        <p>You are:</p>
        {tags.map((tag, idx) => (
          <label key={idx}>
            <input type="checkbox" defaultChecked /> {tag}
          </label>
        ))}
      </div>

      <div className="question">
        <p>Mummy, mi friends sobat firayla jau ka?</p>
        <div className="buttons">
          <button onClick={() => alert("Yayy!")} className="yes-btn">Yes</button>
          <button
  onMouseEnter={moveNoButton}
  onTouchStart={moveNoButton}
  style={noButtonStyle}
  className="no-btn"
>
  No
</button>

        </div>
      </div>
    </div>
  );
}

export default App;

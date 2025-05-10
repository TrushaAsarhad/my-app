import React from 'react';

const wishes = [
  "You are my superhero without a cape!",
  "Mumma, you're my fashion icon & life coach in one!",
  "Tuzya sarcasm la world record milava!",
  "Meme queen & business queen combo!",
  "Thanks for teaching me how to handle life with sass!",
];

const Wish = () => {
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  return <p className="wish">{randomWish}</p>;
};

export default Wish;

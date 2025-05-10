import React from 'react';

const traits = [
  "Entrepreneur",
  "Business woman",
  "Fashion diva",
  "Coolest mom",
  "Mom who shares reels and relates to memes",
  "Her iconic sarcastic mindblowing replies to me and my brother"
];

const TraitsChecklist = () => {
  return (
    <div className="traits">
      <h2>That's my Aai 😎:</h2>
      <ul>
        {traits.map((trait, index) => (
          <li key={index}>
            <input type="checkbox" id={`trait-${index}`} />
            <label htmlFor={`trait-${index}`}>{trait}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TraitsChecklist;

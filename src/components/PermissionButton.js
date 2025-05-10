import React, { useState } from 'react';

const PermissionButton = () => {
  const [showMeme, setShowMeme] = useState(false);
  const [noBtnStyle, setNoBtnStyle] = useState({});

  const handleYes = () => {
    setShowMeme(true);
  };

  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;

    setNoBtnStyle({
      position: 'absolute',
      transform: `translate(${randomX}px, ${randomY}px)`,
    });
  };

  return (
    <div className="permission">
      <h3>Me ani mazhe friends firayla jua ka ?</h3>
      <div className="buttons" style={{ position: 'relative', height: '100px' }}>
        <button onClick={handleYes}>Yes 😇</button>
        <button
          style={noBtnStyle}
          onMouseEnter={handleNoHover}
        >
          No 🙃
        </button>
      </div>
      {showMeme && (
        <img
          src="/shinchang-meme.jpg"
          alt="Shinchan and Mom"
          className="meme"
        />
      )}
    </div>
  );
};

export default PermissionButton;

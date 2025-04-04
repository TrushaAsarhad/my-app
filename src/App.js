import React, { useState, useEffect } from "react";
import "./App.css";

const quotes = [
  "Sisters by chance, besties by choice 💖",
  "You make life sparkle, Didi ✨",
  "24 and glowing like the queen you are 👑",
  "From silly fights to endless laughs 😄",
  "The world got brighter the day you were born 🌸",
  "Every picture is a memory I cherish 🫶",
  "My built-in best friend forever 💕",
  "Here's to love, pink vibes & endless cake 🎂",
];

const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  const images = Array.from({ length: 24 }, (_, i) => `${process.env.PUBLIC_URL}/images/photo${i + 1}.jpg`);


  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffe4e6", // pink-100
        padding: "1rem",
        fontFamily: "sans-serif",
        color: "#be185d", // pink-700
        overflowX: "hidden",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        💗 Happy 24th Birthday, Didi! 💗
      </h1>
      <p style={{ fontStyle: "italic", marginBottom: "1.5rem" }}>{`"${quote}"`}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "1rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              backgroundColor: "white",
              borderRadius: "1rem",
              border: "4px solid #f9a8d4", // pink-300
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={src}
              alt={`Memory ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.875rem", color: "#db2777" }}>
        Made with love by Harshada 💕
      </p>
    </div>
  );
}

export default App;

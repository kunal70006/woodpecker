import React, { useState, useEffect } from "react";

interface EmojiPosition {
  id: number;
  left: number;
  top: number;
  size: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
}

const AnimatedTextReveal = () => {
  const [revealed, setRevealed] = useState(false);
  const [emojiPositions, setEmojiPositions] = useState<EmojiPosition[]>([]);
  const text =
    "Im Sorry Simdon, I'll make sure i dont talk in that tone again :(";

  // Generate random positions for emojis
  useEffect(() => {
    const positions = [];
    for (let i = 0; i < 20; i++) {
      positions.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        animationDuration: Math.random() * 10 + 5,
        animationDelay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    setEmojiPositions(positions);

    // Auto-reveal after 1.5 seconds
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-64 overflow-hidden bg-gradient-to-r rounded-lg shadow-lg">
      {/* Background emojis */}
      {emojiPositions.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute text-4xl animate-bounce"
          style={{
            left: `${emoji.left}%`,
            top: `${emoji.top}%`,
            fontSize: `${emoji.size}rem`,
            opacity: emoji.opacity,
            animationDuration: `${emoji.animationDuration}s`,
            animationDelay: `${emoji.animationDelay}s`,
            transform: "translateY(0px)",
            animation: `bounce ${emoji.animationDuration}s ease-in-out ${emoji.animationDelay}s infinite alternate`,
          }}
        >
          😢
        </div>
      ))}

      {/* Text reveal container */}
      <div className="z-10 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="overflow-hidden">
          <h1
            className={`text-4xl font-bold text-pink-400 transform transition-transform duration-1000 ${
              revealed ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextReveal;

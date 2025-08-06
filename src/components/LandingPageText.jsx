import React, { useState, useEffect } from "react";

const LandingPageText = () => {
  const texts = [
    "till trust is earned",
    "until both sides agree",
    "when the deal is real",
    "after the work is done",
    "when it’s safe to move",
     "when it’s safe to move",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`bg-gradient-to-r from-[#667385] to-[#0080ff] text-transparent bg-clip-text transition-opacity duration-1000 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {texts[index]}
    </span>
  );
};

export default LandingPageText;

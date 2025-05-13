import { useEffect, useState } from "react";

const TypeWriterEffect = ({ word }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAnimationComplete) return;

    const typeCharacter = async () => {
      if (displayedText.length < word.length) {
        const char = word.charAt(displayedText.length);
        setDisplayedText((prevText) => prevText + char);
        await new Promise((resolve) => setTimeout(resolve, 500));
      } else {
        setIsAnimationComplete(true);
      }
    };

    const animate = async () => {
      if (word != undefined) {
        for (let i = 0; i < word.length; i++) {
          const char = word.charAt(i);
          setDisplayedText((prevText) => prevText + char);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
        setIsAnimationComplete(true);
      }
    };

    animate();
  }, [word, isAnimationComplete]);

  return (
    <div>
      {displayedText.length > 0 ? (
        <ul>
          {displayedText.split("").map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TypeWriterEffect;

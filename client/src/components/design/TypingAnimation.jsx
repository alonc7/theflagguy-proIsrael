import React, { useEffect, useRef } from "react";

const TypingAnimation = ({ text, interval, loop, style }) => {
  const txtRef = useRef(null);

  useEffect(() => {
    const element = txtRef.current;
    const textArray = text.split("");
    let index = 0;

    const animateTyping = () => {
      // Clear the text content before adding each character
      element.textContent = "";

      // Loop through the textArray up to the current index
      for (let i = 0; i <= index; i++) {
        element.textContent += textArray[i];
      }

      if (index < textArray.length - 1) {
        index++;
      } else {
        if (loop) {
          index = 0; // Reset the index if looping
        } else {
          return; // Exit the function if not looping and animation is complete
        }
      }

      // Call animateTyping again after interval
      setTimeout(animateTyping, interval);
    };

    // Start the typing animation
    animateTyping();

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(animateTyping);
  }, [text, loop, interval]);

  return <span className={style} ref={txtRef} />;
};

export default TypingAnimation;

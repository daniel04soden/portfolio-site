import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
}

function TypingText({ text }: TypingTextProps) {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(reducedMotion ? text.length : 0);

  useEffect(() => {
    if (reducedMotion) {
      setCount(text.length);
      return;
    }
    setCount(0);
    const id = window.setInterval(() => {
      setCount((prev) => {
        if (prev >= text.length) {
          window.clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 48);
    return () => window.clearInterval(id);
  }, [text, reducedMotion]);

  return (
    <h2 className="typing-text">
      {text.slice(0, count)}
      <span className="caret" aria-hidden="true" />
    </h2>
  );
}

export default TypingText;

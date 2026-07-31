import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (!deleting && text === currentWord) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((t) =>
          deleting
            ? currentWord.slice(0, t.length - 1)
            : currentWord.slice(0, t.length + 1),
        );
      },
      deleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

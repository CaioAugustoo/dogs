import { useState, useEffect } from "react";

const useMedia = media => {
  const [match, setMach] = useState(null);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setMach(matches);
    };
    window.addEventListener("resize", changeMatch);
    return () => window.removeEventListener("resize", changeMatch);
  }, [media]);

  return match;
};

export default useMedia;

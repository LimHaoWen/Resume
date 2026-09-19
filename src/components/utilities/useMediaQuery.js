import { useState, useEffect } from "react";

// Tracks whether a media query currently matches, updating on change.
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(mediaQueryList.matches);

    listener();
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

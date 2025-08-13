import { useEffect, useState } from "react";

// Custom hook to store state in localStorage
export function useLocalStorage(key, initialValue = null) {
  // On first render, try to read the saved value (as a plain string)
  const [value, setValue] = useState(() => {
    try {
      const saved = window.localStorage.getItem(key);
      // If there is something in storage, return it as-is (string)
      // Otherwise return the provided initial value (may be null)
      return saved !== null ? saved : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Write plain value (no JSON.stringify) whenever it changes
  useEffect(() => {
    try {
      // If value is null or undefined, remove the key to keep storage clean
      if (value === null || value === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, value);
      }
    } catch {
      // Ignore write errors
    }
  }, [key, value]);

  return [value, setValue];
}
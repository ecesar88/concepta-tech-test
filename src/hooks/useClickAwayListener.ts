import React, { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useClickAwayListener(
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as any)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);
}

export default useClickAwayListener;

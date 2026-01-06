import { RefObject, useEffect } from "react";

export default function useClickOutsideListener(
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current?.contains(e.target as Node)) {
        handler();
      }
    };
    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  }, [ref, handler]);
}

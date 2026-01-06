export function debounce(callback: () => void, ms: number): () => void {
  let timeoutId: NodeJS.Timeout;
  let fulfilled = false;
  const resetTimeout = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
      fulfilled = true;
    }, ms);
  };
  resetTimeout();
  return () => !fulfilled && resetTimeout();
}
import { useEffect } from 'react';

export const useEscapeKeyPress = (callback: () => void) => {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        callback();
      }
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [callback]);
}
import {RefObject, useEffect, useRef} from 'react';

export function useClickOutside(elementRef: RefObject<HTMLElement>, callback: () => void) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        callbackRef.current();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [elementRef]);
}
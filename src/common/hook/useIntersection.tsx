import { RefObject, useEffect } from 'react';

export default function useIntersection(
  ref: RefObject<HTMLElement>,
  handler: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) {
  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver !== 'function') return;

    const observer = new IntersectionObserver(handler, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [handler, options, ref]);
}

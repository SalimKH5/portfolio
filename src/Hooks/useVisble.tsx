import { MutableRefObject, useEffect, useState } from "react";

export function useIsVisible(ref: MutableRefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref?.current) {
        observer.disconnect();
      }
    };
  }, [ref]);

  console.log({isIntersecting})

  return isIntersecting;
}

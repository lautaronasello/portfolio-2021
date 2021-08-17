import { useEffect, useRef, useState } from 'react';

export default function useElementOnScreen(options, anim, outro) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [number, setNumber] = useState();

  useEffect(() => {
    console.log(number);
  }, [number]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callbakFunction = (entries) => {
    const [entry] = entries;
    setNumber(entry.intersectionRatio);
    if (isVisible) {
      entry.target.style.animation = anim;
    } else {
      entry.target.style.animation = outro ? outro : 'null';
    }
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbakFunction, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [callbakFunction, containerRef, options]);

  return [containerRef, isVisible];
}

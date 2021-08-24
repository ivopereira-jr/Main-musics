import { useRef } from "react";
import { useEffect } from "react"

export default function InfiniteScroll({ fetchMore }) {
  const containerRef = useRef();
  
  useEffect(() => {
    const options = {
      root: null, // elemento pai null === viewport
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) { 
        observer.disconnect(); // ignorar outras entradas
        fetchMore();
      }
    }, options);

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect(); // limpar a memoria
    }

  }, []);

  return <div ref={containerRef} />;
};
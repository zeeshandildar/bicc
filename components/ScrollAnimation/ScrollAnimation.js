'use client';
import { useEffect, useRef } from 'react';

export default function ScrollAnimation({ children, delay = 0, className = '' }) {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [delay]);

  return (
    <div className={`reveal ${className}`} ref={domRef}>
      {children}
    </div>
  );
}

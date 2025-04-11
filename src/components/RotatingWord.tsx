import React, { useEffect, useState } from 'react';

const words = [
  'Possession',
  'Steal',
  'Assist',
  'Rebound',
  'Point',
  'Substitution',
  'Stat',
];

const RotatingWord = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300); // time for fade out before word changes
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`transition-opacity duration-300 ease-in-out ${
        fade ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {words[index]}
    </span>
  );
};

export default RotatingWord;

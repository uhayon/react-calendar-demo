import { useState, useEffect } from 'react';

const isSmallScreen = () => {
  return window.innerWidth <= 600;
}

export default () => {
  const [windowWidthSmall, setWindowWidthSmall] = useState(isSmallScreen());
  const onResize = () => { console.log('a'); setWindowWidthSmall(isSmallScreen())};

  useEffect(
    () => {
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
      }
    },
    []
  );

  return windowWidthSmall;
}
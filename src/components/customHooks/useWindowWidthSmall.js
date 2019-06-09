import { useState, useEffect } from 'react';

const isSmallScreen = () => {
  return window.innerWidth <= 750;
}

export default () => {
  const [windowWidthSmall, setWindowWidthSmall] = useState(isSmallScreen());
  const onResize = () => { setWindowWidthSmall(isSmallScreen())};

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
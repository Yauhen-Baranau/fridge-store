import { useEffect, useState } from "react";

export default function useResponsive() {
  const desktopToIpadBreakpoint = 1170;
  const ipadToMobileBreakpoint = 834;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const listener = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return {
    isDesktop: windowWidth > desktopToIpadBreakpoint,
    isIpad: windowWidth > ipadToMobileBreakpoint && windowWidth <= desktopToIpadBreakpoint,
    isMobile: windowWidth <= ipadToMobileBreakpoint,
  };
}
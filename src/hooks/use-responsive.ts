'use client';

import { debounce } from "@helpers/debounce";
import { useEffect, useState } from "react";

export default function useResponsive() {
  const desktopToIpadBreakpoint = 1170;
  const ipadToMobileBreakpoint = 834;

  const [windowWidth, setWindowWidth] = useState(1280);
  const [initialResizeSettled, setInitialResizeSettled] = useState(false);
  useEffect(() => {
    const deferResizeSettle = debounce(() => setInitialResizeSettled(true), 200);
    const listener = () => {
      setWindowWidth(window.innerWidth);
      deferResizeSettle();
    };
    window.addEventListener('resize', listener);
    window.dispatchEvent(new Event('resize')); // can't use window in useState default value
    return () => window.removeEventListener('resize', listener);
  }, []);

  return {
    isDesktop: windowWidth > desktopToIpadBreakpoint,
    isIpad: windowWidth > ipadToMobileBreakpoint && windowWidth <= desktopToIpadBreakpoint,
    isMobile: windowWidth <= ipadToMobileBreakpoint,
    initialResizeSettled,
  };
}
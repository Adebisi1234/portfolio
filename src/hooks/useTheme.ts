import { useEffect, useLayoutEffect, useState } from "react";
import type { Route } from "./useRoute";

const ACCENT_HUES = [224, 178];

const ROUTE_DEFAULT_HUE: Record<Route, number> = {
  software: 224,
  data: 178,
};

export function useTheme(route: Route) {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [hue, setHue] = useState(() => ROUTE_DEFAULT_HUE[route]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useLayoutEffect(() => {
    document.documentElement.style.setProperty("--accent-hue", `${hue}deg`);
  }, [hue]);

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", `hsl(${hue}deg 35% 14%)`);
    }
  }, [hue]);

  return { dark, setDark, hue, setHue, accentHues: ACCENT_HUES };
}

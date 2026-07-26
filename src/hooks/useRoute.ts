import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export type Route = "software" | "data";

export function useRoute() {
  const location = useLocation();

  const route: Route = location.pathname.startsWith("/data")
    ? "data"
    : "software";

  useEffect(() => {
    document.body.classList.toggle("route-data", route === "data");
  }, [route]);

  return { route };
}
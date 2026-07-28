import { useLocation } from "react-router-dom";

export type Route = "software" | "data";

export function useRoute() {
  const location = useLocation();

  const route: Route = location.pathname.startsWith("/data")
    ? "data"
    : "software";

  return { route };
}
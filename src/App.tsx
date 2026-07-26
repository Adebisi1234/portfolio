import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const SoftwareLayout = lazy(() => import("./routes/SoftwareLayout"));
const DataLayout = lazy(() => import("./routes/DataLayout"));

function RouteContent() {
  const location = useLocation();
  const routeKey = location.pathname.startsWith("/data") ? "data" : "software";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [routeKey]);

  return (
    <div key={routeKey} className="route-fade-in">
      <Routes>
        <Route path="/" element={<Navigate to="/software/" replace />} />
        <Route path="/software/*" element={<SoftwareLayout />} />
        <Route path="/data/*" element={<DataLayout />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<div className="min-h-screen" />}>
        <RouteContent />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
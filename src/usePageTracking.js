import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-EKVSEY10M9", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}

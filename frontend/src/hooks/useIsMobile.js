import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for server-side rendering safety if needed)
    if (typeof window !== "undefined") {
      const mql = window.matchMedia("(max-width: 768px)");
      setIsMobile(mql.matches);

      const handleChange = (e) => setIsMobile(e.matches);
      mql.addEventListener("change", handleChange);

      return () => mql.removeEventListener("change", handleChange);
    }
  }, []);

  return isMobile;
}

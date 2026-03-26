import { useState } from "react";

// Exposes the last routing decision to any component that needs it
export function useRouter() {
  const [lastRoute, setLastRoute] = useState(null);
  // lastRoute shape: { provider, model, reason }

  function updateRoute(routeInfo) {
    setLastRoute(routeInfo);
  }

  return { lastRoute, updateRoute };
}

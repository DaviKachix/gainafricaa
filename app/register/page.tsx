"use client";

import { useEffect } from "react";

export default function RegisterRedirect() {
  useEffect(() => {
    const isLocal = window.location.hostname === "localhost";

    if (isLocal) {
      window.location.href = "http://localhost:3000";
    } else {
      window.location.href = "https://php-events.onrender.com";
    }
  }, []);

  return null;
}

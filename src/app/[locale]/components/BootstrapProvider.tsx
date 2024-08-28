// app/components/BootstrapProvider.tsx (or BootstrapProvider.js)
"use client";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BootstrapProvider() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return null;
}

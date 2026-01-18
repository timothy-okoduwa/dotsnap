"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 bg-emerald-500 text-black px-6 py-3 rounded font-mono text-sm font-medium animate-slide-up z-50 shadow-2xl">
      {message}
    </div>
  );
}

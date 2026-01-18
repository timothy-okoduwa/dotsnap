"use client";

import { Terminal } from "lucide-react";
import Button from "@/components/shared/Button";

export default function Header() {
  return (
    <header className="border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-500" />
            <span className="font-mono text-lg font-semibold">dotsnap</span>
          </div>
        </button>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/timothy-okoduwa/dotsnap?tab=readme#dotsnap"
            className="text-sm text-gray-400 hover:text-white transition-colors font-mono"
          >
            Docs
          </a>
          <a
            href="https://github.com/timothy-okoduwa/dotsnap"
            className="text-sm text-gray-400 hover:text-white transition-colors font-mono"
          >
            GitHub
          </a>
          <Button variant="primary" size="sm">
            <a href="https://github.com/timothy-okoduwa/dotsnap">
              Star on GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

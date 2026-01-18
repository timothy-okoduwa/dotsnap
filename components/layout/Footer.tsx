import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-500" />
            <span className="font-mono text-lg font-semibold">dotsnap</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 font-mono">
            <span>Built in public</span>
            <span>·</span>
            <span>MIT License</span>
            <span>·</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-600 font-mono">
          Made for developers who take security seriously
        </div>
      </div>
    </footer>
  );
}

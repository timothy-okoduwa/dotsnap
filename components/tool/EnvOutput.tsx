import { Copy, Download } from "lucide-react";
import StatsBar from "./StatsBar";
import { getStats } from "@/lib/stats";

interface EnvOutputProps {
  value: string;
  onCopy: () => void;
  onDownload: () => void;
}

export default function EnvOutput({
  value,
  onCopy,
  onDownload,
}: EnvOutputProps) {
  const stats = getStats(value);
  const hasSafeContent = !!value;

  return (
    <div className="bg-gray-950 border border-gray-900 rounded-lg overflow-hidden">
      <StatsBar title=".env.safe" stats={stats} safeToShare={hasSafeContent} />

      <textarea
        value={value}
        readOnly
        className="w-full h-96 bg-black text-white p-4 font-mono text-sm resize-none focus:outline-none"
        placeholder="Masked output will appear here..."
        spellCheck="false"
      />

      <div className="border-t border-gray-900 p-4 flex gap-3">
        <button
          onClick={onCopy}
          disabled={!value}
          className="flex-1 bg-gray-900 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded font-mono text-sm transition-colors border border-gray-800 flex items-center justify-center gap-2"
        >
          <Copy className="w-4 h-4" />
          Copy
        </button>
        <button
          onClick={onDownload}
          disabled={!value}
          className="flex-1 bg-gray-900 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded font-mono text-sm transition-colors border border-gray-800 flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
      </div>
    </div>
  );
}

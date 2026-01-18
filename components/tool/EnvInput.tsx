import StatsBar from "./StatsBar";
import { getStats } from "@/lib/stats";
import { getRiskyLines } from "@/lib/risky";

interface EnvInputProps {
  value: string;
  onChange: (value: string) => void;
  highlightRisky: boolean;
  onMask: () => void;
}

export default function EnvInput({
  value,
  onChange,
  highlightRisky,
  onMask,
}: EnvInputProps) {
  const stats = getStats(value);
  const riskyLines = highlightRisky ? getRiskyLines(value) : [];

  return (
    <div className="bg-gray-950 border border-gray-900 rounded-lg overflow-hidden">
      <StatsBar title=".env" stats={stats} riskyCount={riskyLines.length} />

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-96 bg-black text-white p-4 font-mono text-sm resize-none focus:outline-none"
        placeholder="Paste your .env file here..."
        spellCheck="false"
      />

      <div className="border-t border-gray-900 p-4">
        <button
          onClick={onMask}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded font-mono text-sm transition-colors font-medium"
        >
          → Mask Secrets
        </button>
      </div>
    </div>
  );
}

interface Stats {
  lines: number;
  chars: number;
  secrets: number;
}

interface StatsBarProps {
  title: string;
  stats: Stats;
  riskyCount?: number;
  safeToShare?: boolean;
}

export default function StatsBar({
  title,
  stats,
  riskyCount,
  safeToShare,
}: StatsBarProps) {
  return (
    <div className="border-b border-gray-900 p-4 flex items-center justify-between">
      <div>
        <h3 className="font-mono text-sm font-medium">{title}</h3>
        <p className="text-xs text-gray-500 font-mono mt-1">
          {stats.secrets} secrets · {stats.lines} lines
        </p>
      </div>

      {riskyCount !== undefined && riskyCount > 0 && (
        <div className="flex items-center gap-2 text-xs bg-yellow-500 bg-opacity-10 border border-yellow-500 border-opacity-30 px-3 py-1.5 rounded font-mono">
          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
          <span className="text-white">{riskyCount} risky</span>
        </div>
      )}

      {safeToShare && (
        <div className="flex items-center gap-2 text-xs bg-emerald-500 bg-opacity-10 border border-emerald-500 border-opacity-30 px-3 py-1.5 rounded font-mono">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
          <span className="text-white">Safe to share</span>
        </div>
      )}
    </div>
  );
}

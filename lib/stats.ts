export interface EnvStats {
  lines: number;
  chars: number;
  secrets: number;
}

export function getStats(content: string): EnvStats {
  const lines = content.split("\n").filter((l) => l.trim());
  const secrets = lines.filter(
    (l) => !l.startsWith("#") && l.includes("="),
  ).length;

  return {
    lines: lines.length,
    chars: content.length,
    secrets,
  };
}

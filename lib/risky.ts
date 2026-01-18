export function isRiskyKey(key: string): boolean {
  const riskyPatterns = [
    "KEY",
    "SECRET",
    "TOKEN",
    "PASS",
    "AUTH",
    "PRIVATE",
    "CREDENTIAL",
  ];

  return riskyPatterns.some((pattern) => key.toUpperCase().includes(pattern));
}

export function getRiskyLines(content: string): number[] {
  return content
    .split("\n")
    .map((line, idx) => {
      const equalsIndex = line.indexOf("=");
      if (equalsIndex > 0) {
        const key = line.slice(0, equalsIndex).trim();
        return isRiskyKey(key) ? idx : -1;
      }
      return -1;
    })
    .filter((idx) => idx >= 0);
}

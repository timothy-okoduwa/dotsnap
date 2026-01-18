export function shareEnvContent(content: string): string {
  const encoded = btoa(encodeURIComponent(content));
  // Point to /tool page instead of current page
  return `${window.location.origin}/tool?content=${encoded}`;
}

export function getSharedContent(): string | null {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("content");

  if (!encoded) return null;

  try {
    const decoded = decodeURIComponent(atob(encoded));
    return decoded;
  } catch (error) {
    console.error("Failed to decode shared content:", error);
    return null;
  }
}

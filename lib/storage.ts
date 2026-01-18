const STORAGE_KEY = "dotsnap-input";

export function saveInputContent(content: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, content);
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
}

export function loadInputContent(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to load from localStorage:", error);
    return null;
  }
}

export function clearInputContent(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear localStorage:", error);
  }
}

function maskSecret(value, showFirstLast = true, fullyHide = false) {
  if (!value) return value;

  const unquoted = value.replace(/^["']|["']$/g, "");

  if (fullyHide) {
    return "****";
  }

  const len = unquoted.length;
  if (len <= 4) {
    return "****";
  }

  if (!showFirstLast) {
    return "*".repeat(len);
  }

  const firstChars = unquoted.slice(0, 3);
  const lastChars = unquoted.slice(-4);
  const maskedMiddle = "*".repeat(Math.max(len - 7, 4));

  return firstChars + maskedMiddle + lastChars;
}

function processEnvContent(content, showFirstLast = true, fullyHide = false) {
  const lines = content.split("\n");

  return lines
    .map((line) => {
      if (!line.trim() || line.trim().startsWith("#")) {
        return line;
      }

      const equalsIndex = line.indexOf("=");
      if (equalsIndex === -1) {
        return line;
      }

      const key = line.slice(0, equalsIndex).trim();
      const value = line.slice(equalsIndex + 1).trim();

      if (!value) {
        return line;
      }

      const maskedValue = maskSecret(value, showFirstLast, fullyHide);
      return `${key}=${maskedValue}`;
    })
    .join("\n");
}

module.exports = {
  maskSecret,
  processEnvContent,
};

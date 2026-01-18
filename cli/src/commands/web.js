const chalk = require("chalk");
const { logInfo, logSuccess, logError } = require("../utils/logger");

async function webCommand(options) {
  const port = options.port || 3000;

  console.log("");
  logInfo("Opening DotSnap Web UI...");
  console.log("");

  // Try to open the hosted web version
  const url = "https://dotsnap.com/tool"; // Replace with your actual domain

  logSuccess(`Opening browser at: ${chalk.cyan(url)}`);
  console.log("");
  logInfo("If the browser doesn't open automatically, visit:");
  console.log(`  ${chalk.cyan(url)}`);
  console.log("");

  // Try to open browser
  const open = require("open");
  try {
    await open(url);
  } catch (error) {
    logError("Could not open browser automatically");
    logInfo(`Please visit: ${chalk.cyan(url)}`);
  }
}

module.exports = { webCommand };

const chalk = require("chalk");
const ora = require("ora");
const {
  readEnvFile,
  writeEnvFile,
  fileExists,
} = require("../utils/fileSystem");
const { processEnvContent } = require("../utils/mask");
const { logSuccess, logError, logInfo } = require("../utils/logger");

async function maskCommand(options) {
  const spinner = ora("Processing .env file...").start();

  try {
    // Check if input file exists
    if (!fileExists(options.input)) {
      spinner.fail();
      logError(`File not found: ${options.input}`);
      process.exit(1);
    }

    // Read the .env file
    spinner.text = "Reading .env file...";
    const content = readEnvFile(options.input);

    // Count secrets
    const secretCount = content
      .split("\n")
      .filter(
        (line) => !line.trim().startsWith("#") && line.includes("="),
      ).length;

    // Mask the content
    spinner.text = "Masking secrets...";
    const showFirstLast = options.firstLast !== false;
    const fullyHide = options.fullyHide || false;
    const maskedContent = processEnvContent(content, showFirstLast, fullyHide);

    // Write to output file
    spinner.text = "Saving masked file...";
    writeEnvFile(options.output, maskedContent);

    spinner.succeed();

    // Success messages
    console.log("");
    logSuccess(`Found .env file`);
    logSuccess(`Masked ${secretCount} secrets`);
    logSuccess(`Saved to ${options.output}`);
    console.log("");
    logInfo(`You can now safely share ${chalk.cyan(options.output)}`);
    console.log("");
  } catch (error) {
    spinner.fail();
    logError(`Failed to mask secrets: ${error.message}`);
    process.exit(1);
  }
}

module.exports = { maskCommand };

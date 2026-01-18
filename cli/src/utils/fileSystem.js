const fs = require("fs");
const path = require("path");

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function readEnvFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    throw new Error(`Failed to read file: ${error.message}`);
  }
}

function writeEnvFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf8");
  } catch (error) {
    throw new Error(`Failed to write file: ${error.message}`);
  }
}

module.exports = {
  fileExists,
  readEnvFile,
  writeEnvFile,
};

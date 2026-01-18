#!/usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");
const packageJson = require("../package.json");
const { maskCommand } = require("../src/commands/mask");
const { webCommand } = require("../src/commands/web");

program
  .name("dotsnap")
  .description("Mask your .env files securely")
  .version(packageJson.version);

program
  .command("mask")
  .description("Mask secrets in your .env file")
  .option("-i, --input <file>", "Input .env file", ".env")
  .option("-o, --output <file>", "Output file", ".env.safe")
  .option("--fully-hide", "Completely hide all values with ****")
  .option("--no-first-last", "Don't show first/last characters")
  .action(maskCommand);

program
  .command("web")
  .description("Open the web UI in your browser")
  .option("-p, --port <port>", "Port to run on", "3000")
  .action(webCommand);

program.parse();

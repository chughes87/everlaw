#!/usr/bin/env node

const { readFile } = require('./fileReader');

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node src/cli.js <filepath>');
    process.exit(1);
  }
  
  const filepath = args[0];
  
  try {
    const content = await readFile(filepath);
    console.log(content);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();

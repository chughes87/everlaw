#!/usr/bin/env node

import { readFile } from './fileReader';

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: node dist/cli.js <filepath>');
    process.exit(1);
  }

  const filepath = args[0];

  try {
    const content = await readFile(filepath);
    console.log(content);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Error: ${message}`);
    process.exit(1);
  }
}

main();

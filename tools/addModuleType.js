#!/usr/bin/env node

const { writeFile } = require('fs/promises');
const { join } = require('path');

const libPackageJson = {
  type: 'module',
};

async function main() {
  try {
    const libPath = join(process.cwd(), 'lib', 'package.json');
    await writeFile(libPath, JSON.stringify(libPackageJson, null, 2));
    console.log('Created lib/package.json with type: module');
  } catch (error) {
    console.error('Error creating lib/package.json:', error);
    process.exit(1);
  }
}

main();

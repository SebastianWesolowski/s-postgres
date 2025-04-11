const fs = require('fs/promises');
const path = require('path');

async function preparePackage() {
  // Wczytaj główny package.json
  const mainPackage = JSON.parse(await fs.readFile('package.json', 'utf-8'));

  const libPackage = { ...mainPackage };

  // Dodaj konfigurację ES modules
  libPackage.type = 'module';

  // Zapisz do lib/package.json
  await fs.writeFile('lib/package.json', JSON.stringify(libPackage, null, 2));
}

preparePackage().catch(console.error);

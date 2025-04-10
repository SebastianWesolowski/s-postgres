#!/usr/bin/env node

import { parseDatabaseUrl } from './utils/database';
import { startDockerContainer } from './utils/docker';
import { checkEnvVariable } from './utils/env';

// const execAsync = promisify(exec);

async function main() {
  try {
    // Sprawdź i ustaw zmienne środowiskowe
    const databaseUrl = checkEnvVariable('DATABASE_URL', 'postgresql://s:s@localhost:5010/mydb?schema=public');

    const containerName = checkEnvVariable('CONTAINER_NAME', 's-postgres');

    // Parsuj URL bazy danych
    const dbConfig = parseDatabaseUrl(databaseUrl);

    // Uruchom kontener Docker
    await startDockerContainer({
      ...dbConfig,
      containerName,
    });

    console.log('Baza danych została uruchomiona pomyślnie');
  } catch (error) {
    console.error('Błąd podczas uruchamiania bazy danych:', error);
    process.exit(1);
  }
}

main();

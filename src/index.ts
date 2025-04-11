#!/usr/bin/env node

import { checkDatabaseExists, createDatabase, parseDatabaseUrl } from './utils/database';
import { startDockerContainer } from './utils/docker';
import { checkEnvVariable } from './utils/env';

// const execAsync = promisify(exec);

async function main() {
  try {
    // Pobierz dane z DATABASE_URL lub z indywidualnych zmiennych
    let dbConfig;

    if (process.env.DATABASE_URL) {
      const databaseUrl = checkEnvVariable('DATABASE_URL', 'postgresql://s:s@localhost:5010/mydb?schema=public');
      dbConfig = parseDatabaseUrl(databaseUrl);
    } else {
      // Użyj indywidualnych zmiennych środowiskowych
      dbConfig = {
        user: checkEnvVariable('DATABASE_USER', 's'),
        password: checkEnvVariable('DATABASE_PASSWORD', 's'),
        host: checkEnvVariable('DATABASE_HOST', 'localhost'),
        port: checkEnvVariable('DATABASE_PORT', '5010'),
        database: checkEnvVariable('DATABASE_NAME', 'mydb'),
        schema: 'public',
      };
    }

    const containerName = checkEnvVariable('CONTAINER_NAME', 's-postgres');

    // Start Docker container first to ensure PostgreSQL is running
    await startDockerContainer({
      ...dbConfig,
      containerName,
    });

    // Wait for PostgreSQL to start
    console.log('Waiting for PostgreSQL to start');
    for (let i = 3; i > 0; i--) {
      console.log(`${i}...`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Check if database exists
    const dbExists = await checkDatabaseExists(dbConfig);
    if (!dbExists) {
      console.log(`Database ${dbConfig.database} does not exist. Creating...`);
      const created = await createDatabase(dbConfig);
      if (created) {
        console.log(`Database ${dbConfig.database} created successfully`);
      }
    }

    console.log('Database started successfully');
  } catch (error) {
    console.error('Error while starting the database:', error);
    process.exit(1);
  }
}

main();

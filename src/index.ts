#!/usr/bin/env node

import { checkDatabaseExists, parseDatabaseUrl } from './utils/database';
import { startDockerContainer } from './utils/docker';
import { checkEnvVariable } from './utils/env';

// const execAsync = promisify(exec);

async function main() {
  try {
    // Check and set environment variables
    const databaseUrl = checkEnvVariable('DATABASE_URL', 'postgresql://s:s@localhost:5010/mydb?schema=public');
    const containerName = checkEnvVariable('CONTAINER_NAME', 's-postgres');

    // Parse database URL
    const dbConfig = parseDatabaseUrl(databaseUrl);

    // Check if database exists
    const dbExists = await checkDatabaseExists(dbConfig);
    if (!dbExists) {
      console.log(`Database ${dbConfig.database} does not exist. Creating...`);
    }

    // Start Docker container
    await startDockerContainer({
      ...dbConfig,
      containerName,
    });

    console.log('Database started successfully');
  } catch (error) {
    console.error('Error while starting the database:', error);
    process.exit(1);
  }
}

main();

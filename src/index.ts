#!/usr/bin/env node

import { parseDatabaseUrl } from './utils/database';
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

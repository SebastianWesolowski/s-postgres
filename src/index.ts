#!/usr/bin/env node

import { checkDatabaseExists, createDatabase, parseDatabaseUrl } from './utils/database';
import { startDockerContainer } from './utils/docker';
import { checkEnvVariable } from './utils/env';

// const execAsync = promisify(exec);

/**
 * Main function of the s-postgres package.
 *
 * Performs the following operations:
 * 1. Gets configuration from environment variables
 * 2. Starts a Docker container with PostgreSQL
 * 3. Waits for the database to start
 * 4. Checks if the target database exists
 * 5. Creates the database if it doesn't exist
 */
async function main() {
  try {
    // Get data from DATABASE_URL or from individual variables
    let dbConfig;

    if (process.env.DATABASE_URL) {
      const databaseUrl = checkEnvVariable('DATABASE_URL', 'postgresql://test:test@localhost:5432/mydb');
      dbConfig = parseDatabaseUrl(databaseUrl);
    } else {
      // Use individual environment variables
      dbConfig = {
        user: checkEnvVariable('DATABASE_USER', 'test'),
        password: checkEnvVariable('DATABASE_PASSWORD', 'test'),
        host: checkEnvVariable('DATABASE_HOST', 'localhost'),
        port: checkEnvVariable('DATABASE_PORT', '5432'),
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

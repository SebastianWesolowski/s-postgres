import { Client } from 'pg';
import { URL } from 'url';

export interface DatabaseConfig {
  user: string;
  password: string;
  host: string;
  port: string;
  database: string;
  schema?: string;
}

/**
 * Parses database URL to a configuration object.
 *
 * @param databaseUrl - Database URL in the format postgresql://user:password@host:port/database?schema=schema
 * @returns Database configuration object
 */
export function parseDatabaseUrl(urlString: string): DatabaseConfig {
  const url = new URL(urlString);

  return {
    user: url.username,
    password: url.password,
    host: url.hostname,
    port: url.port,
    database: url.pathname.slice(1),
    schema: new URLSearchParams(url.search).get('schema') || 'public',
  };
}

/**
 * Checks if a database with the given name exists.
 *
 * @param dbConfig - Database configuration
 * @returns Promise<boolean> - true if the database exists, false otherwise
 */
export async function checkDatabaseExists(dbConfig: DatabaseConfig): Promise<boolean> {
  try {
    const { user, password, host, port, database } = dbConfig;

    // Connect to the postgres database (default system database)
    const connectionString = `postgresql://${user}:${password}@${host}:${port}/postgres`;

    const client = new Client({ connectionString });
    await client.connect();

    const result = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [database]);

    await client.end();
    return (result.rowCount ?? 0) > 0;
  } catch (error) {
    // If we can't connect to the postgres database, let's try to create the database without checking
    console.error('Error checking database existence:', error);
    return false;
  }
}

/**
 * Creates a database with the given name.
 *
 * @param dbConfig - Database configuration
 * @returns Promise<boolean> - true if the database was created, false in case of an error
 */
export async function createDatabase(dbConfig: DatabaseConfig): Promise<boolean> {
  try {
    const { user, password, host, port, database } = dbConfig;

    // Connect to the postgres database (default system database)
    const connectionString = `postgresql://${user}:${password}@${host}:${port}/postgres`;

    const client = new Client({ connectionString });
    await client.connect();

    await client.query(`CREATE DATABASE "${database}"`);

    await client.end();
    return true;
  } catch (error) {
    console.error('Error creating database:', error);
    return false;
  }
}

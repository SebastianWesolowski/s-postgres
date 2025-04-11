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

export async function checkDatabaseExists(dbConfig: DatabaseConfig): Promise<boolean> {
  try {
    const { user, password, host, port, database } = dbConfig;

    // Połączenie do bazy postgres (domyślna baza systemowa)
    const connectionString = `postgresql://${user}:${password}@${host}:${port}/postgres`;

    const client = new Client({ connectionString });
    await client.connect();

    const result = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [database]);

    await client.end();
    return (result.rowCount ?? 0) > 0;
  } catch (error) {
    // Jeśli nie możemy połączyć się z bazą postgres, spróbujmy utworzyć bazę bez sprawdzania
    console.error('Error checking database existence:', error);
    return false;
  }
}

export async function createDatabase(dbConfig: DatabaseConfig): Promise<boolean> {
  try {
    const { user, password, host, port, database } = dbConfig;

    // Połączenie do bazy postgres (domyślna baza systemowa)
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

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
    const connectionString = `postgresql://${user}:${password}@${host}:${port}/postgres`;

    const client = new Client({ connectionString });
    await client.connect();

    const result = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [database]);

    await client.end();
    return (result.rowCount ?? 0) > 0;
  } catch (error) {
    console.error('Error checking database existence:', error);
    return false;
  }
}

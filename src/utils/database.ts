import { URL } from 'url';

export interface DatabaseConfig {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
  schema?: string;
}

export function parseDatabaseUrl(urlString: string): DatabaseConfig {
  const url = new URL(urlString);

  return {
    username: url.username,
    password: url.password,
    host: url.hostname,
    port: parseInt(url.port, 10),
    database: url.pathname.slice(1),
    schema: new URLSearchParams(url.search).get('schema') || 'public',
  };
}

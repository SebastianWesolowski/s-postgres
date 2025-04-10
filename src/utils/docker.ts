import { exec } from 'child_process';
import { promisify } from 'util';
import { DatabaseConfig } from './database';

const execAsync = promisify(exec);

interface DockerConfig extends DatabaseConfig {
  containerName: string;
}

export async function startDockerContainer(config: DockerConfig) {
  const { username, password, database, port, containerName } = config;

  const dockerComposeCommand = `
    docker-compose -f ./src/scripts/docker-compose.yaml up -d
  `;

  // Ustaw zmienne środowiskowe dla docker-compose
  process.env.USERNAME = username;
  process.env.PASSWORD = password;
  process.env.DATABASE = database;
  process.env.PORT = port.toString();
  process.env.CONTAINER_NAME = containerName;

  try {
    await execAsync(dockerComposeCommand);
  } catch (error) {
    throw new Error(`Błąd podczas uruchamiania kontenera Docker: ${error}`);
  }
}

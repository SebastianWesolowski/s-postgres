import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const execAsync = promisify(exec);

async function startDockerContainer(config) {
  const { username, password, database, port, containerName } = config;
  const dockerComposePath = path.resolve(__dirname, 'scripts/docker-compose.yaml');
  const dockerComposeCommand = `docker-compose -f ${dockerComposePath} up -d`;

  // Set environment variables for docker-compose
  process.env.USERNAME = username;
  process.env.PASSWORD = password;
  process.env.DATABASE = database;
  process.env.PORT = port.toString();
  process.env.CONTAINER_NAME = containerName;

  try {
    await execAsync(dockerComposeCommand);
  } catch (error) {
    throw new Error(`Error while starting Docker container: ${error}`);
  }
}

export { startDockerContainer };

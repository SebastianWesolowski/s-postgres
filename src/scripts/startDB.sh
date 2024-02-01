#!/bin/bash

# Import the function
source ./src/scripts/utils.sh
source .env



# Use the environment variables in your script
echo "******"
checkEnvVariable "DATABASE_URL" "postgresql://s:s@localhost:5010/mydb?schema=public"
echo "******"
parsed_variables=$(parse_database_url "$DATABASE_URL")

eval $parsed_variables
checkEnvVariable "CONTAINER_NAME" "s-postgres"

echo "******"
echo "Environment variables set:"
echo "USERNAME=$USERNAME"
echo "PASSWORD=$PASSWORD"
echo "DATABASE=$DATABASE"
echo "HOST=$HOST"
echo "PORT=$PORT"
echo "CONTAINER_NAME=$CONTAINER_NAME"
echo "******"
## Set environment variables
export USERNAME=$USERNAME
export PASSWORD=$PASSWORD
export DATABASE=$DATABASE
export HOST=$HOST
export PORT=$PORT

docker-compose --file ./src/scripts/docker-compose.yaml up -d

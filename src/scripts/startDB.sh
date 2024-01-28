#!/bin/bash

# Import the function
source ./src/scripts/utils.sh
source .env

# Use the environment variables in your script
echo "******"
echo "DB Start $DATABASE_URL"
echo "******"
parsed_variables=$(parse_database_url "$DATABASE_URL")
echo "******"
eval $parsed_variables

echo "Environment variables set:"
echo "USERNAME=$USERNAME"
echo "PASSWORD=$PASSWORD"
echo "DATABASE=$DATABASE"
echo "HOST=$HOST"
echo "PORT=$PORT"
echo "******"
## Set environment variables
export USERNAME=$USERNAME
export PASSWORD=$PASSWORD
export DATABASE=$DATABASE
export HOST=$HOST
export PORT=$PORT

docker-compose --file ./src/scripts/docker-compose.yaml up -d

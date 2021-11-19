# Deleting network if available
docker network rm perfume-service

# Creating network for services
docker network create perfume-service

# Increasing default HTTP Timeout from 60 to 300
export COMPOSE_HTTP_TIMEOUT=300

# Start all services in background with -d flag
docker-compose up --build
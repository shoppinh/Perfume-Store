# Deleting network if available
docker network rm perfume-service

# Creating network for services
docker network create perfume-service


# Start all services in background with -d flag
docker-compose up --build -d
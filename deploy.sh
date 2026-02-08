#!/bin/bash

# CITOCD Web Deployment Script
# This script deploys the CITOCD website using Docker

set -e  # Exit on error

echo "========================================="
echo "CITOCD Web Deployment Script"
echo "========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
CONTAINER_NAME="citocd-web"
IMAGE_NAME="citocd-web:latest"
PORT=${PORT:-3004}

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

print_success "Docker is installed"

# Check if Docker Compose is available
if ! docker compose version &> /dev/null; then
    print_warning "Docker Compose V2 not found, trying legacy docker-compose..."
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose."
        exit 1
    fi
    COMPOSE_CMD="docker-compose"
else
    COMPOSE_CMD="docker compose"
fi

print_success "Docker Compose is available"
echo ""

# Stop and remove existing container
echo "Step 1: Stopping existing containers..."
if docker ps -a | grep -q $CONTAINER_NAME; then
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
    print_success "Stopped and removed existing container"
else
    print_warning "No existing container found"
fi
echo ""

# Remove old image (optional - uncomment for fresh builds)
# echo "Step 2: Removing old image..."
# docker rmi $IMAGE_NAME 2>/dev/null || true

# Build the Docker image
echo "Step 2: Building Docker image..."
$COMPOSE_CMD build
print_success "Docker image built successfully"
echo ""

# Start the container
echo "Step 3: Starting container..."
$COMPOSE_CMD up -d
print_success "Container started successfully"
echo ""

# Wait for healthcheck
echo "Step 4: Waiting for application to be ready..."
sleep 5

# Check if container is running
if docker ps | grep -q $CONTAINER_NAME; then
    print_success "Container is running"
    echo ""
    echo "========================================="
    echo "Deployment Complete!"
    echo "========================================="
    echo ""
    echo "Application is running at:"
    echo "  - Local: http://localhost:$PORT"
    echo "  - Container: $CONTAINER_NAME"
    echo ""
    echo "Useful commands:"
    echo "  - View logs: docker logs -f $CONTAINER_NAME"
    echo "  - Stop container: docker stop $CONTAINER_NAME"
    echo "  - Restart container: docker restart $CONTAINER_NAME"
    echo "  - Remove container: docker rm -f $CONTAINER_NAME"
    echo ""
else
    print_error "Container failed to start"
    echo "Checking logs..."
    docker logs $CONTAINER_NAME
    exit 1
fi

#!/bin/bash

echo "🚀 Deploying Wiki..."

echo "📦 Building and starting container..."
docker-compose up -d --build

echo "✅ Wiki deployed successfully!"
echo "🌐 Your wiki is now available at http://localhost"

echo ""
echo "📋 Useful commands:"
echo "  Stop:    docker-compose down"
echo "  Logs:    docker-compose logs -f"
echo "  Rebuild: docker-compose up -d --build" 
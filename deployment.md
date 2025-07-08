# Deployment Guide

This guide explains how to deploy the RemmyChat wiki using Docker.

## Prerequisites

- Docker and Docker Compose installed on your server
- Basic command line knowledge

## Quick Deployment

The easiest way to deploy the wiki is using the provided deployment script:

```bash
./deploy.sh
```

This will:
1. Build the VitePress documentation site
2. Create a Docker container with nginx
3. Start the service on port 80

## Manual Deployment

If you prefer to deploy manually:

```bash
# Build and start the container
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the service
docker-compose down
```

## Configuration

### Port Configuration

By default, the wiki runs on port 80. To change this, edit `docker-compose.yml`:

```yaml
ports:
  - "8080:80"  # Change 8080 to your desired port
```

### Custom Domain

To use a custom domain, update the `server_name` in `nginx.conf`:

```nginx
server_name yourdomain.com www.yourdomain.com;
```

For production with SSL, consider using a reverse proxy like Traefik or adding SSL certificates directly to nginx.

## Production Considerations

- Use a reverse proxy with SSL termination
- Set up log rotation for nginx logs
- Consider using Docker swarm or Kubernetes for scaling
- Monitor container health and resource usage

## Development

To work on the wiki locally:

```bash
npm install
npm run docs:dev
```

This starts a development server with hot reloading at `http://localhost:5173`. 
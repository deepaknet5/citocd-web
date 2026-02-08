# Remote Server Deployment Guide for CITOCD Website

This guide provides step-by-step instructions for deploying the CITOCD website to a remote Ubuntu server with Nginx and SSL.

## Prerequisites

- Ubuntu 20.04+ server with root/sudo access
- Domain name (citocd.com) with DNS configured
- SSH access to the server
- Basic knowledge of command line

## Step 1: Prepare Your Server

### 1.1 Connect to Server

```bash
ssh root@your-server-ip
# or
ssh username@your-server-ip
```

### 1.2 Update System

```bash
sudo apt update
sudo apt upgrade -y
```

### 1.3 Install Required Packages

```bash
# Install basic utilities
sudo apt install -y git curl wget nano

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo apt install -y docker-compose-plugin

# Verify installations
docker --version
docker compose version
```

## Step 2: Clone and Deploy Application

### 2.1 Clone Repository

```bash
cd /opt
sudo mkdir -p citocd
sudo chown $USER:$USER citocd
cd citocd

# Clone your repository
git clone <your-repository-url> .
# OR upload files via scp/rsync
```

### 2.2 Deploy with Docker

```bash
chmod +x deploy.sh
./deploy.sh
```

The application will now be running on `http://your-server-ip:8080`

## Step 3: Install and Configure Nginx

### 3.1 Install Nginx

```bash
sudo apt install -y nginx
```

### 3.2 Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/citocd.com
```

Add the following configuration:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name citocd.com www.citocd.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy to Docker container
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }

    # Access and error logs
    access_log /var/log/nginx/citocd-access.log;
    error_log /var/log/nginx/citocd-error.log;
}
```

### 3.3 Enable Site and Test

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/citocd.com /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

Now your site should be accessible at `http://citocd.com`

## Step 4: Setup SSL with Let's Encrypt

### 4.1 Install Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 4.2 Obtain SSL Certificate

```bash
sudo certbot --nginx -d citocd.com -d www.citocd.com
```

Follow the prompts:
1. Enter your email address
2. Agree to terms of service
3. Choose whether to redirect HTTP to HTTPS (recommended: Yes)

Certbot will automatically:
- Obtain SSL certificates
- Update Nginx configuration
- Set up automatic certificate renewal

### 4.3 Verify SSL Configuration

The updated Nginx configuration will look like:

```nginx
server {
    server_name citocd.com www.citocd.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/citocd.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/citocd.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.citocd.com) {
        return 301 https://$host$request_uri;
    }

    if ($host = citocd.com) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    listen [::]:80;
    server_name citocd.com www.citocd.com;
    return 404;
}
```

### 4.4 Test SSL Renewal

```bash
sudo certbot renew --dry-run
```

Certbot automatically sets up a cron job/systemd timer for auto-renewal.

## Step 5: Configure Firewall

### 5.1 Setup UFW (Uncomplicated Firewall)

```bash
# Allow SSH
sudo ufw allow OpenSSH

# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

## Step 6: Verify Deployment

### 6.1 Check Services

```bash
# Check Docker container
docker ps

# Check Nginx
sudo systemctl status nginx

# Check SSL certificate
sudo certbot certificates
```

### 6.2 Test Website

1. Open browser and navigate to `https://citocd.com`
2. Verify SSL certificate (padlock icon)
3. Test all pages and navigation
4. Test contact form
5. Check mobile responsiveness

## Step 7: Maintenance and Updates

### 7.1 Update Application

```bash
cd /opt/citocd
git pull
./deploy.sh
```

### 7.2 View Logs

```bash
# Docker container logs
docker logs -f citocd-web

# Nginx access logs
sudo tail -f /var/log/nginx/citocd-access.log

# Nginx error logs
sudo tail -f /var/log/nginx/citocd-error.log
```

### 7.3 Restart Services

```bash
# Restart Docker container
docker restart citocd-web

# Restart Nginx
sudo systemctl restart nginx
```

### 7.4 Backup

```bash
# Backup application files
sudo tar -czf citocd-backup-$(date +%Y%m%d).tar.gz /opt/citocd

# Backup Nginx configuration
sudo cp /etc/nginx/sites-available/citocd.com /opt/citocd/nginx-backup.conf
```

## Troubleshooting

### Container Won't Start

```bash
# Check container logs
docker logs citocd-web

# Rebuild container
cd /opt/citocd
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Nginx Issues

```bash
# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Check error logs
sudo tail -50 /var/log/nginx/error.log
```

### SSL Certificate Issues

```bash
# Check certificate status
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Force renewal
sudo certbot renew --force-renewal
```

### Port Already in Use

```bash
# Check what's using port 8080
sudo lsof -i :8080

# Or use netstat
sudo netstat -tulpn | grep 8080
```

## Performance Optimization

### Enable Nginx Caching

Add to Nginx configuration:

```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m use_temp_path=off;

location / {
    proxy_cache my_cache;
    proxy_cache_revalidate on;
    proxy_cache_min_uses 3;
    proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
    proxy_cache_lock on;

    # ... rest of proxy configuration
}
```

### Enable Gzip Compression in Nginx

Add to `http` block in `/etc/nginx/nginx.conf`:

```nginx
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss;
```

## Security Best Practices

1. **Keep System Updated**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Configure SSH Key Authentication**
   - Disable password authentication
   - Use SSH keys only

3. **Enable Fail2Ban**
   ```bash
   sudo apt install fail2ban
   sudo systemctl enable fail2ban
   ```

4. **Regular Backups**
   - Set up automated backups
   - Test restore procedures

5. **Monitor Server**
   - Set up monitoring (e.g., Prometheus, Grafana)
   - Configure alerts for downtime

## Additional Configuration

### Custom Port

To change the application port, edit `docker-compose.yml`:

```yaml
ports:
  - "9000:80"  # Change 9000 to your desired port
```

Then update the Nginx proxy_pass:

```nginx
proxy_pass http://localhost:9000;
```

### Environment Variables

Create `.env` file for environment-specific configuration:

```bash
nano /opt/citocd/.env
```

## Support

For issues or questions:
- Email: accounts@citocd.com
- Check logs for error messages
- Review GitHub issues

---

**Last Updated**: February 2026  
**Maintained by**: CITOCD Team

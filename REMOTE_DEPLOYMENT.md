# CITOCD Remote Server Deployment Guide

## Server Information
- **Remote Server**: srv634686
- **Port**: 3004 (available)
- **Container Name**: citocd-web
- **Domain**: citocd.com (to be configured)

## Current Running Containers on Server
```bash
Port 3020: bettercare
Port 3005: dental-clinic
Port 3001: ugandapay-gateway
Port 5001: ugandapay-admin-api
Port 4000: ugandapay-web
Port 3002: ugandapay-ussd-provider
Port 3003: ugandapay-payment-engine
Port 3006: kiosk-prod
```

**CITOCD will use Port 3004** ✅

---

## Deployment Steps

### 1. Prepare Local Code
```bash
# Ensure all changes are committed
cd ~/repos/citocd-web
git status
git add .
git commit -m "Refocused on DevOps/Cloud services with improved navigation"
```

### 2. Transfer Code to Remote Server

**Option A: Using Git (Recommended)**
```bash
# On remote server
ssh deepak@srv634686
cd ~
git clone <your-repo-url> citocd-web
# OR if already cloned:
cd ~/citocd-web
git pull origin main
```

**Option B: Using rsync**
```bash
# From local machine
rsync -avz --exclude 'node_modules' --exclude 'dist' \
  ~/repos/citocd-web/ deepak@srv634686:~/citocd-web/
```

### 3. Deploy Docker Container on Remote Server
```bash
# SSH into remote server
ssh deepak@srv634686

# Navigate to project directory
cd ~/citocd-web

# Make deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

The script will:
- ✅ Check Docker and Docker Compose
- ✅ Stop existing citocd-web container (if any)
- ✅ Build new Docker image
- ✅ Start container on port 3004
- ✅ Run health checks

### 4. Verify Deployment
```bash
# Check container status
docker ps | grep citocd-web

# Test locally on server
curl http://localhost:3004

# View logs
docker logs -f citocd-web
```

---

## Nginx Configuration

### Create Nginx Configuration File
```bash
sudo nano /etc/nginx/sites-available/citocd.com
```

**Add the following configuration:**
```nginx
# CITOCD Website - DevOps & Cloud Services
server {
    listen 80;
    listen [::]:80;
    server_name citocd.com www.citocd.com;

    # Redirect to HTTPS (after SSL is configured)
    # return 301 https://$server_name$request_uri;

    # Proxy to Docker container
    location / {
        proxy_pass http://localhost:3004;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Logs
    access_log /var/log/nginx/citocd-access.log;
    error_log /var/log/nginx/citocd-error.log;
}
```

### Enable Site
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/citocd.com /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

## SSL Configuration with Certbot

### Install Certbot (if not already installed)
```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
```

### Obtain SSL Certificate
```bash
# Obtain and install SSL certificate
sudo certbot --nginx -d citocd.com -d www.citocd.com

# Follow the prompts - choose option 2 for redirect
```

Certbot will automatically:
- ✅ Obtain SSL certificate
- ✅ Update Nginx configuration
- ✅ Set up auto-renewal

### Verify SSL Auto-Renewal
```bash
sudo certbot renew --dry-run
```

---

## Firewall Configuration

### Allow HTTP and HTTPS
```bash
# Check current firewall status
sudo ufw status

# Allow HTTP (port 80)
sudo ufw allow 80/tcp

# Allow HTTPS (port 443)
sudo ufw allow 443/tcp

# Reload firewall
sudo ufw reload
```

---

## DNS Configuration

Update your DNS records to point to the server:

```
Type: A
Name: @
Value: <server-ip-address>
TTL: 3600

Type: A  
Name: www
Value: <server-ip-address>
TTL: 3600
```

Wait for DNS propagation (can take up to 48 hours, usually 1-2 hours).

---

## Useful Commands

### Container Management
```bash
# View logs
docker logs -f citocd-web

# Restart container
docker restart citocd-web

# Stop container
docker stop citocd-web

# Remove container
docker rm -f citocd-web

# View container stats
docker stats citocd-web

# Execute command in container
docker exec -it citocd-web sh
```

### Redeploy After Updates
```bash
cd ~/citocd-web
git pull origin main  # If using git
./deploy.sh
```

### Nginx Management
```bash
# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx

# View Nginx logs
sudo tail -f /var/log/nginx/citocd-access.log
sudo tail -f /var/log/nginx/citocd-error.log
```

---

## Troubleshooting

### Container Won't Start
```bash
# Check logs
docker logs citocd-web

# Check if port is already in use
sudo netstat -tulpn | grep 3004

# Rebuild without cache
docker compose build --no-cache
./deploy.sh
```

### Nginx 502 Bad Gateway
```bash
# Check if container is running
docker ps | grep citocd-web

# Test container directly
curl http://localhost:3004

# Check Nginx error logs
sudo tail -f /var/log/nginx/citocd-error.log
```

### SSL Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Test renewal
sudo certbot renew --dry-run
```

---

## Monitoring & Maintenance

### Set Up Log Rotation
```bash
# Docker logs are automatically rotated
# Nginx logs rotation is handled by logrotate

# Check logrotate configuration
cat /etc/logrotate.d/nginx
```

### Regular Backups
```bash
# Backup Docker image
docker save citocd-web:latest | gzip > citocd-web-backup.tar.gz

# Backup Nginx configuration
sudo cp /etc/nginx/sites-available/citocd.com ~/backups/
```

---

## Production Checklist

- [ ] Code deployed to remote server
- [ ] Docker container running on port 3004
- [ ] Nginx configured and tested
- [ ] SSL certificate obtained and installed
- [ ] DNS records pointing to server
- [ ] Firewall rules configured
- [ ] Health checks passing
- [ ] Logs accessible and monitored
- [ ] Backup strategy in place

---

## Support

- **Application URL**: http://srv634686:3004 (internal)
- **Public URL**: https://citocd.com (after DNS/SSL setup)
- **Container Port**: 3004
- **Container Name**: citocd-web
- **Image Name**: citocd-web:latest

**Status**: Ready for deployment ✅

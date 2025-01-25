# Use Nginx as the base image
FROM nginx:alpine

# Copy your website files to Nginx's default web directory
COPY . /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

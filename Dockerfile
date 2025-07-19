# Use an official Node.js runtime as a parent image
FROM node:lts-alpine AS build

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies (including devDependencies needed for build)
RUN npm ci

# Copy the rest of your app's source code
COPY . .

# Build the application
RUN npm run build


FROM nginx:alpine

# Use existing nginx user for security (nginx:alpine already has nginx user)
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy custom nginx configuration files for non-root user
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/conf.d/default.conf

# Ensure nginx user owns the html directory
RUN chown -R nginx:nginx /usr/share/nginx/html

# Configure for Docker Desktop auto-port mapping (using 8080 for non-root)
EXPOSE 8080
LABEL com.docker.desktop.extension.port.8080.protocol="http"
LABEL com.docker.desktop.extension.port.8080.path="/"

# Add health check to ensure nginx is serving content
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl --silent --fail http://127.0.0.1:8080/ || exit 1

# Switch to non-root user
USER nginx

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
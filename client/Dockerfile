# frontend/Dockerfile
FROM node:latest

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies only if node_modules is not present
RUN [ ! -d "node_modules" ] && npm install || echo "Using existing node_modules"

# Copy the rest of the project files
COPY . .

# Expose the port Vite runs on
EXPOSE 3000

# Start the Vite dev server
CMD ["npm", "run", "dev"]

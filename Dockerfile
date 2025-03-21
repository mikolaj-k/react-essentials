# Description: Dockerfile to build a nodejs application
FROM node:23-alpine

# Create a directory in the container to store the application
WORKDIR /app

# Copy package.json to the container /app directory
COPY package.json .

RUN npm install

# copy local files to container /app directory
COPY . . 

# Expose the port the app runs in
EXPOSE 3000

# Run the application
CMD ["npm", "run", "dev"]
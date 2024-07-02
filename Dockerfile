# Use the official Node.js slim image as the base image
FROM node:slim

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the current directory contents (on the host) into the container at /app
COPY . /app/

# Install the dependencies specified in package.json
RUN npm install

# Copy the current directory contents into the container again, potentially updating files
COPY . .

# Document that the container listens on port 3001
EXPOSE 3210

# Define the command to run the application, starting the Node.js server
CMD ["node", "index.js"]

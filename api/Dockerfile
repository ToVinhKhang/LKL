# Use the official image as a parent image.
FROM node:current-slim

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json ./
COPY yarn.lock ./

# Run the command inside your image filesystem.
RUN yarn install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 4000

# Run the specified command within the container.
CMD [ "yarn", "start" ]

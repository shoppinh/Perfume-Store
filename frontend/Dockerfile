# Base Package
FROM node:14


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Initiate npm start
CMD ["npm","run", "start"]

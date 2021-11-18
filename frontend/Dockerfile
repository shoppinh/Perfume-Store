# Base Package
FROM node:14 as build-step


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./frontend/package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

#RUN yarn install
EXPOSE 3000
# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /usr/src/app/build /usr/share/nginx/html
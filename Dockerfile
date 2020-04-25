FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Copy app files
COPY . . 

# Switch to node user
USER node

CMD [ "yarn", "run", "test:unit"] 

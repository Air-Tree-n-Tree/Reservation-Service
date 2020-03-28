FROM node:12.16.1

# Grab the repository
RUN mkdir -p /src/reservations-service
COPY . /src/reservations-service
WORKDIR /src/reservations-service
RUN cd /src/reservations-service

# Install dependencies
RUN npm install

# Start server
EXPOSE 3002
CMD ["node", "index.js"]

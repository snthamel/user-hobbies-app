# User Hobbies Application

A Node.js TypeScript REST API that manages users and user hobbies

## Requirements

This application can be built and deployed to `Docker` container and Docker compose. For instructions on installing Docker and Docker compose (>Version 1.28.5), please visit https://docs.docker.com/get-docker/ and https://docs.docker.com/compose/install/

## Build
Install the necessary dependancies with following command within the project folder
```
npm install
```

Run the following command to build and run the API service docker image

```
docker-compose up -d
```

To stop the service and remove all relevant resources, run the following command
```
docker-compose down
```

## Demo

Once the API service is built and started using above command, use http://localhost:3000 in Postman to access the API

API documentation can be browsed through http://localhost:3000/docs

## Testing

After starting the API service, run the following command to test the application
```
npm test
```

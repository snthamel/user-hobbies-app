const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'user-hobbies-app',
      version: '1.0.0'
    },
  },
  apis: ['./src/swagger/*.ts'],
};

export default swaggerJSDoc(options);

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'MyBank API',
    version: '1.0.0',
    description: 'API for MyBank application',
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server',
    },
  ],
  components: {
    schemas: {
      Account: {
        type: 'object',
        required: ['bankid', 'AccountID', 'AccountName', 'ModeOfOperation', 'customerId', 'Type', 'DateOfOpening', 'Status', 'Balance', 'StaffId', 'BranchId'],
        properties: {
          id: {
            type: 'integer',
            description: 'Auto-generated ID',
          },
          bankid: {
            type: 'string',
            description: 'Bank ID',
          },
          AccountID: {
            type: 'string',
            description: 'Unique Account ID',
          },
          AccountName: {
            type: 'string',
            description: 'Account Name',
          },
          ModeOfOperation: {
            type: 'string',
            description: 'Mode of Operation',
          },
          customerId: {
            type: 'string',
            description: 'Customer ID',
          },
          Type: {
            type: 'string',
            description: 'Account Type',
          },
          DateOfOpening: {
            type: 'string',
            format: 'date',
            description: 'Date of Opening',
          },
          Status: {
            type: 'string',
            description: 'Account Status',
          },
          Balance: {
            type: 'number',
            format: 'decimal',
            description: 'Account Balance',
          },
          DateOfClosing: {
            type: 'string',
            format: 'date',
            description: 'Date of Closing (optional)',
          },
          StaffId: {
            type: 'string',
            description: 'Staff ID',
          },
          BranchId: {
            type: 'string',
            description: 'Branch ID',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./routes/accountRoutes.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
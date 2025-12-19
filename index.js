const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./db');
const { swaggerUi, swaggerSpec } = require('./swagger');

dotenv.config();

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

(async () => {
  try {
    await connectDB();

    const app = express();

    app.use(cors());
    app.use(express.json());

    // Swagger documentation
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api-docs.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(swaggerSpec);
    });

    app.use('/api/customers', require('./routes/customerRoutes'));
    app.use('/api/accounts', require('./routes/accountRoutes'));
    app.use('/api/branches', require('./routes/branchRoutes'));
    app.use('/api/transactions', require('./routes/transactionRoutes'));
    app.use('/api/banks', require('./routes/bankRoutes'));
    app.use('/api/leads', require('./routes/leadRoutes'));

    const PORT = process.env.PORT || 5000;

    const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    server.on('error', (err) => {
      console.error('Server error:', err);
      process.exit(1);
    });
  } catch (err) {
    console.error('Initialization error:', err);
    process.exit(1);
  }
})();
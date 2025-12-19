const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Import all models to ensure they are registered before sync
require('./models/Account');
require('./models/Bank');
require('./models/Branch');
require('./models/Customer');
require('./models/Lead');
require('./models/Transaction');

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Sync models to database
    console.log('SQLite connected and synced');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
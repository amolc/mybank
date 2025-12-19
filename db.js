const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

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
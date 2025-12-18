const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Transaction = sequelize.define('Transaction', {
  bankid: { type: DataTypes.STRING, allowNull: false },
  TransactionId: { type: DataTypes.STRING, allowNull: false, unique: true },
  AccountId: { type: DataTypes.STRING, allowNull: false },
  BranchId: { type: DataTypes.STRING, allowNull: false },
  CustomerId: { type: DataTypes.STRING, allowNull: false },
  Type: { type: DataTypes.STRING, allowNull: false },
  Amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  Currency: { type: DataTypes.STRING, allowNull: false },
  Date: { type: DataTypes.DATE, allowNull: false },
  Balance: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

module.exports = Transaction;
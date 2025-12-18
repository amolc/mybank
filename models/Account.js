const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Account = sequelize.define('Account', {
  bankid: { type: DataTypes.STRING, allowNull: false },
  AccountID: { type: DataTypes.STRING, allowNull: false, unique: true },
  AccountName: { type: DataTypes.STRING, allowNull: false },
  ModeOfOperation: { type: DataTypes.STRING, allowNull: false },
  customerId: { type: DataTypes.STRING, allowNull: false },
  Type: { type: DataTypes.STRING, allowNull: false },
  DateOfOpening: { type: DataTypes.DATE, allowNull: false },
  Status: { type: DataTypes.STRING, allowNull: false },
  Balance: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  DateOfClosing: { type: DataTypes.DATE },
  StaffId: { type: DataTypes.STRING, allowNull: false },
  BranchId: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Account;
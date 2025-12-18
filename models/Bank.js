const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Bank = sequelize.define('Bank', {
  bankid: { type: DataTypes.STRING, allowNull: false, unique: true },
  BankName: { type: DataTypes.STRING, allowNull: false },
  Address: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Bank;
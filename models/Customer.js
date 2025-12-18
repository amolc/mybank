const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Customer = sequelize.define('Customer', {
  bankid: { type: DataTypes.STRING, allowNull: false },
  customerId: { type: DataTypes.STRING, allowNull: false, unique: true },
  Name: { type: DataTypes.STRING, allowNull: false },
  Address: { type: DataTypes.STRING, allowNull: false },
  Mobile: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  Dob: { type: DataTypes.DATE, allowNull: false },
  PanCard: { type: DataTypes.STRING, allowNull: false },
  AadharCard: { type: DataTypes.STRING, allowNull: false },
  Gender: { type: DataTypes.STRING, allowNull: false },
  Occupation: { type: DataTypes.STRING, allowNull: false },
  MaritalStatus: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Customer;
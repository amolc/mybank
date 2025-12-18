const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Branch = sequelize.define('Branch', {
  bankid: { type: DataTypes.STRING, allowNull: false },
  BranchId: { type: DataTypes.STRING, allowNull: false, unique: true },
  BranchCode: { type: DataTypes.STRING, allowNull: false },
  Address: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Branch;
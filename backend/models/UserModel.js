const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Adiciona createdAt e updatedAt
    createdAt: "created_at", // Renomeia o campo para 'created_at'
    updatedAt: "updated_at", // Renomeia o campo para 'updated_at'
    tableName: "Users", // Define o nome da tabela para 'Users'
  }
);

module.exports = User;

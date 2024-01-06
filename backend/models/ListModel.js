const { DataTypes } = require("sequelize");

const db = require("../db/conn");
const User = require("./UserModel");

const Contact = db.define(
  "Contact",
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
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "Contact",
  }
);

Contact.belongsTo(User);

User.hasMany(Contact);

module.exports = Contact;

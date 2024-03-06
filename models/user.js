const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../db/sequelize');

class User extends Model {}

User.init({
  userId: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  age: {
    allowNull: false,
    type: DataTypes.SMALLINT,
  },
  location: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  modelName: 'users',
  sequelize,
});

module.exports = User;

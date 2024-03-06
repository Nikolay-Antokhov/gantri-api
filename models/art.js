const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../db/sequelize');

class Art extends Model {}

Art.init({
  artId: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  externalId: {
    type: DataTypes.STRING,
  },
  title: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  artist: {
    type: DataTypes.TEXT,
  },
  year: {
    type: DataTypes.INTEGER,
  },
}, {
  modelName: 'art',
  sequelize,
});

module.exports = Art;

const { Sequelize } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;

module.exports = new Sequelize(DATABASE_URL, {
  define: {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  },
});

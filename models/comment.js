const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../db/sequelize');

class Comment extends Model {}

Comment.init({
  commentId: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  artId: {
    allowNull: false,
    references: {
      key: 'art_id',
      model: 'art',
    },
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: true,
    references: {
      key: 'user_id',
      model: 'users',
    },
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      customValidator(val) {
        if (!this.userId && !val) {
          throw new Error('User name cannot be null when user ID is not provided!');
        }
      }
    }
  },
  content: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
}, {
  modelName: 'comments',
  sequelize,
});

module.exports = Comment;

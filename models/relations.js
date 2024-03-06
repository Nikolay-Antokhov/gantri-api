const Art = require('./art');
const Comment = require('./comment');

const initModelRelations = () => {
  Art.hasMany(Comment, {
    as: 'comments',
    foreignKey: 'art_id',
  });

  Comment.belongsTo(Art, {
    as: 'art',
    foreignKey: 'art_id',
  });
};

module.exports = initModelRelations;

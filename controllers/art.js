const Art = require('./../models/art');
const Comment = require('./../models/comment');

exports.getAllArt = async (req, res) => {
  try {
    const art = await Art.findAll();

    res.status(200).json({ data: art });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getArtById = async (req, res) => {
  try {
    const art = await Art.findByPk(req.params.artId, {
      include: [{
        model: Comment,
        as: 'comments',
      }],
    });

    if (art === null) {
      res.status(404).json({ message: 'Sorry, we didn\'t find any art with this id' });
    } else {
      res.status(200).json({ data: art });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createComment = async (req, res) => {
  try {
    const artId = req.params.artId;
    const { content, name = '', userId } = req.body;

    if (!userId) {
      const previousComment = await Comment.findOne({ where: { artId, name, userId: null }});

      if (previousComment !== null) {
        return res.status(403).json({ message: 'Account verification required' });
      }
    }

    const comment = await Comment.create({ artId, content, name, userId });

    res.status(200).json({ data: comment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

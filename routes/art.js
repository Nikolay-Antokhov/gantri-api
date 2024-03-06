const artController = require('./../controllers/art');
const express = require('express');

const router = express.Router();

router.route('/art')
  .get(artController.getAllArt);

router.route('/art/:artId')
  .get(artController.getArtById);

router.route('/art/:artId/comments')
  .post(artController.createComment);

module.exports = router;

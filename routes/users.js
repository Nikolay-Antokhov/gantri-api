const express = require('express');
const usersController = require('./../controllers/users');

const router = express.Router();

router.route('/users')
  .get(usersController.getAllUsers)
  .post(usersController.createUser);

module.exports = router;

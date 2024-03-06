const User = require('./../models/user');

exports.createUser = async (req, res) => {
  try {
    const { age, location, name } = req.body;
    const user = await User.create({ age, location, name });

    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

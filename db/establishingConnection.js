const sequelize = require('./sequelize');

const connectWithRetry = async (cb, milliseconds = 5000, retries = 5) => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    cb();
  } catch (error) {
    console.error('Unable to connect to the database:', error);

    if (retries === 0) {
      throw new Error('Maximum retries reached');
    }

    console.log(`Retrying in ${milliseconds / 1000} seconds...`);
    setTimeout(() => connectWithRetry(cb, milliseconds, retries - 1), milliseconds);
  }
};

module.exports = connectWithRetry;

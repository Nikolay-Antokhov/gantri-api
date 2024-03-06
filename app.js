require('dotenv').config();
require('./db/sequelize');

const bodyParser = require('body-parser');
const express = require('express');
const routesArt = require('./routes/art');
const routesUsers = require('./routes/users');
const { Sequelize } = require('sequelize');
const sequelize = require('./db/sequelize');
const Art = require('./models/art');
const Comment = require('./models/comment');
const User = require('./models/user');
const initModelRelations = require('./models/relations');
const csvParse = require('./csv/parse');
const establishingConnection = require('./db/establishingConnection');

const app = express();
const PORT = process.env.PORT;

establishingConnection(() => {
  sequelize.sync({ force: true }).then(() => {
    initModelRelations();
    csvParse();
  });
});

app.use(bodyParser.json());
app.use('/api', routesArt);
app.use('/api', routesUsers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

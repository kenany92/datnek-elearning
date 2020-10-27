const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({origin: 'http://localhost:4200'}))

app.use(bodyParser.json());

const db = require('./app/model');

db.Sequelize.sync();

app.listen(3000, () => {

});
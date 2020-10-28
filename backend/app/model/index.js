const env = process.env.NODE_ENV || 'development';
const datasource = require('../config/db.config')[env].DB_INSTANCE;
const Sequelize = require('sequelize');

const db = {
    Sequelize: Sequelize,
    sequelize: datasource,
};

db.languages = require('./language.model')(db.sequelize, db.Sequelize);

module.exports = db;
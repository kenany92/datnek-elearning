const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const instance = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false
});

const db = {
    Sequelize: Sequelize,
    sequelize: instance,
};

db.languages = require('./language.model')(db.sequelize, db.Sequelize);

module.exports = db;
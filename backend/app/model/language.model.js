const { sequelize, Sequelize } = require(".");
'use strict'

const factory = (sequelize, Sequelize) => {

    const Language = sequelize.define('language', {
        name: Sequelize.String,
        spoken: Sequelize.String,
        written: Sequelize.String,
        understanding: Sequelize.String
    });

    return Language;
};

module.exports = factory;
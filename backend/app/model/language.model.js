'use strict'

const factory = (sequelize, Sequelize) => {

    const Language = sequelize.define('language', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        spoken: {
            type: Sequelize.STRING,
            allowNull: false
        },
        written: {
            type: Sequelize.STRING,
            allowNull: false
        },
        understanding: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Language;
};

module.exports = factory;
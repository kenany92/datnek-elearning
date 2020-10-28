const env = process.env.NODE_ENV || 'development';
const dbConstant = require('./db.constant')[env];
const Sequelize = require('sequelize');

const dbConfig = {

    development: {
        DB_INSTANCE: new Sequelize(dbConstant.DB, dbConstant.USER, dbConstant.PASSWORD, {
            host: dbConstant.HOST,
            dialect: dbConstant.DIALECT,
            operatorsAliases: false
        })
    },

    production: {
        DB_INSTANCE: new Sequelize(dbConstant.DB, dbConstant.USER, dbConstant.PASSWORD, {
            host: dbConstant.HOST,
            dialect: dbConstant.DIALECT,
            operatorsAliases: false
        })
    },

    test: {
        DB_INSTANCE: new Sequelize({
            dialect: dbConstant.DIALECT,
            storage: './datnek.db'
        })
    }
};

module.exports = dbConfig;
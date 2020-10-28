const Factory = require('../model');
const Language = Factory.languages;

const service = {};

/**
 * Get all languages
 * @returns {Promise}
 */
service.getAll = () => {
    return Language.findAll();
};

/**
 * Get language through id
 * @param {string} id 
 * @returns {Promise}
 */
service.get = (id) => {
    return Language.findByPk(id);
};


module.exports = service;
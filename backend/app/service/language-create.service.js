const Factory = require('../model');
const Language = Factory.languages;

const service = {};

/**
 * Create a new language
 * @param {{name: '', spoken: '', written: '', understanding: ''}} language 
 * @returns {Promise} 
 */
service.create = (language) => {

    validate(language);
    return Language.create(language)
};

/**
 * Validate the language input: the require fields should not be null
 * @param {model} language 
 */
function validate(language) {
    
    if (!language.name) {
        throw new Error('The name is required');
    }

    if (!language.spoken) {
        throw new Error('The spoken field is required');
    }

    if (!language.written) {
        throw new Error('The written field is required');
    }

    if (!language.understanding) {
        throw new Error('The understanding field is required');
    }

}

module.exports = service;
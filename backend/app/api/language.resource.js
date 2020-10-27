var router = require('express').Router();
var createService = require('../service/language-create.service');
var getService = require('../service/language-get.service');
const BASE_PATH = '/language';

/**
 * Create language api
 */
router.post(BASE_PATH, (req, res) => {

    try {
        createService.create(req.body).then((created) => {
        res.status(201).send(created);
    }).catch((err) => {
        res.status(500).send({message: 'An error occure while saving the language'})
    });
    } catch(err) {
        res.status(400).send(err);
    }

});

/**
 * Get all languages api
 */
router.get(BASE_PATH, (req, res) => {

    getService.getAll().then((languages) => {
        res.send(languages);
    }).catch((err) => {
        res.status(404).send({message: 'An error occure while retieving languages'})
    });

});

/**
 * Get single language api
 */
router.get(`${BASE_PATH}/:id`, (req, res) => {
    
    const id = req.params.id;

    getService.get(id).then((language) => {
        res.send(language);
    }).catch((err) => {
        res.status(404).send({message: `Cannot find language with id: ${id}`})
    });

});
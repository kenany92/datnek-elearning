var router = require('express').Router();
const Factory = require('../model');
const Language = Factory.languages;
var createService = require('../service/language-create.service');
var getService = require('../service/language-get.service');

// const BASE_PATH = '/api/language';

/**
 * Create language api
 */
router.post('/', (req, res) => {

    console.log('************** call create language ****************');

    try {
        createService.create(req.body).then((created) => {
            // console.log(created);
        res.status(201).json(created);
    })
    .catch((err) => {
        res.status(500).send({message: 'An error occure while saving the language'})
    });
    } catch(err) {
        console.log(err);
        res.status(400).send(err.message);
    }

});

/**
 * Get all languages api
 */
router.get('/', (req, res) => {

    getService.getAll().then((languages) => {
        res.status(200).send(languages);
    }).catch((err) => {
        res.status(404).send({message: 'An error occure while retieving languages'})
    });

});

/**
 * Get single language api
 */
router.get(`/:id`, (req, res) => {

    const id = req.params.id;

    getService.get(id).then((language) => {
        res.send(language);
    }).catch((err) => {
        res.status(404).send({message: `Cannot find language with id: ${id}`})
    });

});

module.exports = router
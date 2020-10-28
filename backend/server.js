function buildServer() {

    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const languageResourse = require('./app/api/language.resource');

    const app = express();

    app.use(cors({origin: 'http://localhost:4200'}))

    app.use(bodyParser.json());

    const db = require('./app/model');

    db.sequelize.sync();

    app.use('/api/languages', languageResourse);

    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
        console.log('Server started');
    });  
    
    // return server;
}

module.exports = buildServer;
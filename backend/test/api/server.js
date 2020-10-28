const express = require('express');
const bodyParser = require('body-parser');
const languageResource = require('../../app/api/language.resource');

function createApp() {
  app = express();

  app.use(bodyParser.json());

  const db = require('../../app/model');
  
  db.sequelize.sync();

  Object.values(db.sequelize.models).map(function(model) {
    return model.destroy({ truncate: true });
  });

  app.use('/api/languages', languageResource);

  return app;
}

module.exports = createApp;
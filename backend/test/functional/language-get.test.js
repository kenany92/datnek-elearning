const { languages } = require('../../app/model');
const service = require('../../app/service/language-get.service');

beforeEach(() => {
    const db = require('../../app/model');
    db.sequelize.sync();
    Object.values(db.sequelize.models).map(function(model) {
        return model.destroy({ truncate: true });
      });
});

test('Test get all languages', async () => {

    const languages = await service.getAll();
    
    expect(languages).toBeDefined();
    expect(languages.length).toBeDefined();
});
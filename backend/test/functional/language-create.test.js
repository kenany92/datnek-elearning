const createService = require('../../app/service/language-create.service');

beforeEach(() => {
    const db = require('../../app/model');
    db.sequelize.sync();
    Object.values(db.sequelize.models).map(function(model) {
        return model.destroy({ truncate: true });
      });
});

test('Test init', async () => {
    expect(1).toBe(1);
});

test('Test create language service ok', async () => {

    const toCreate = {name: 'Fr', spoken: 'Good', understanding: 'Good', written: 'Good'};
    language = await createService.create(toCreate);

    expect(toCreate.id).not.toBeDefined();
    expect(language.id).toBeDefined();
    expect(language.name).toBe(toCreate.name);
    expect(language.spoken).toBe(toCreate.spoken);
});

test('Test create language service without name', async () => {

    const toCreate = {spoken: 'Good', understanding: 'Good', written: 'Good'};
    try {
        language = await createService.create(toCreate);
    } catch (error) {
        expect(error.message).toBe('The name is required')
    }
});
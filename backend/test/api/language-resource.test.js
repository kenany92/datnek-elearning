const api = require('./config');

const BASE_PATH = '/api/languages';

describe('Create language', () => {

    test('Create new Language', async () => {

         var created = await api.post(BASE_PATH)
         .set('Content-Type', 'application/json')
         .send(
            {   name: 'Fr', 
                spoken: 'Good', 
                understanding: 'Good', 
                written: 'Good'
            });

            expect(created).toBeDefined();

            expect(created.body).toBeDefined();
            
            expect(created.body.name).toBeDefined();

            const response = await api.get(BASE_PATH);
            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body.length).toBeDefined();
    });
    
});
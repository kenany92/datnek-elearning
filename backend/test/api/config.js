const supertest = require('supertest');
const PORT = process.env.PORT || 3000;
const server = require('./server');
// const api = supertest(`http://localhost:${PORT}`);
const api = supertest(server());

module.exports = api
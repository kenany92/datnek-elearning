const env = process.env.NODE_ENV;

const db = {
    development: {
        HOST: 'localhost',
        USER: 'root',
        PASSWORD: undefined,
        DB: 'datnek',
        DIALECT: "mysql"
    },
    production: {
        HOST: 'localhost',
        USER: 'datnek',
        PASSWORD: '#t-G<E9[PErdjxWa',
        DB: 'elearning',
        DIALECT: "mysql"
    },
    test: {
        DIALECT: "sqlite"
    }
};

module.exports = db;
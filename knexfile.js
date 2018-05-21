var config = require('./config');

module.exports = {

    development: {
        migrations: { tableName: config.migrations },
        seeds: { tableName: config.seeds },

        client: config.client,
        connection: {
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database,
            charset: config.charset
        }

    },
    production2: {
        migrations: { tableName: config.migrations },
        seeds: { tableName: config.seeds },

        client: config.client,
        connection: {
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database,
            charset: config.charset
        }

    },
    production: {
        "use_env_variable": "DATABASE_URL"
    }
};
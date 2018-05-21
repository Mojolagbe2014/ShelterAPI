var config = {
    env: "production",
    user: "root",
    password: "mysql",
    database: "pets",
    host: "localhost",
    port: 8000,
    client: "mysql",
    charset: "utf8",
    migrations: "knex_migrations",
    seeds: "./seeds"
};

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
    production: {
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

    }
};
var config = {
    env: "development",
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

module.exports = config;
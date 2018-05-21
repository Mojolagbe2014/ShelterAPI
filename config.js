// api general config
var config = {
    env: "production",
    user: "root",
    password: "mysql",
    database: "pets",
    host: "localhost",
    port: 8080,
    client: "mysql",
    charset: "utf8",
    migrations: "knex_migrations",
    seeds: "./seeds"
};

module.exports = config;
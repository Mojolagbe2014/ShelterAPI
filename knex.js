// api general config
var config = require('./config');

const Knex = require('knex')( {
    client: config.client,
    connection: {
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database,
        charset: config.charset
    }

} );

module.exports = Knex;
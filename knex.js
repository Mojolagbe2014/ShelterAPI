// api general config
var config = require('./config');

export default require('knex')( {
    client: config.client,
    connection: {
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database,
        charset: config.charset
    }

} );
// api general config
var config = require('./config');

var dbconfig    = require('./knexfile'); 
var Knex        = require('knex')(dbconfig[config.env]);

module.exports = Knex;

Knex.migrate.latest([dbconfig]); 
Knex.seed.run([dbconfig]);
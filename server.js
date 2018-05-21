'use strict';

// api general config
var config = require('./config');

// api author info
const author = {
    name: "Jamiu Mojolagbe",
    email: "mojolagbe@gmail.com",
    phone: "2048697315",
    GoogleAPIKey: "AIzaSyDQ27WgInDdmdUlbeM_-CsTmfY_Jx0LCyg",
    DarkSkyAPIKey: "752ca7ee5d3924bfb68660d1ad417709"
};

// knex database config
var Knex = require('./knex');

// other requires
const Hapi = require('hapi');   
const server = new Hapi.Server();
const Joi = require('joi');

var connecParams = (config.env === 'production')  ?   { port: process.env.PORT, routes: { cors: true } }
                : {port: config.port, host:config.host, routes: { cors: true }};

// ------------------
// configure the port
// ------------------
server.connection(connecParams);


// --------------
// Routes
// -------------- 

// home page
server.route({  
    method: 'GET',
    path: '/',
    handler: (request, response) => response('Welcome to Pet Shelter API')
});

// welcome custom
server.route({  
    method: 'GET',
    path: '/welcome/{name}/',
    handler: (request, response) => response(`Welcome ${request.params.name} to Pet Shelter API`)
});

// Read Pets
server.route({
    path: '/pets/',
    method: 'GET',
    handler: (request, response) => {
        const read = Knex('pets').where({status: true})
            .select('id','name','type','breed','location','latitude','longitude')
            .then(results => {
                if(!results || results.length === 0) {
                    response({
                        status: 0,
                        error: true,
                        errMessage: 'No pets found!'
                    });
                }
                response({
                    status: 1,
                    count: results.length,
                    pets: results
                });

            })
            .catch(error => {
                response('Server-Side Error >> '+error);
            });

    }
});





// ------------------
// Start The Server
// ------------------
server.start(error => {  
    if (error) {
        console.error(error);
    }
    console.log(`Server started at ${server.info.uri }`);
});
//import Knex from './knex';
//import GUID from 'node-uuid';  // uuid module can be used instead
//
//const Joi = require('joi');
//const Joi = Hapi.types;

const routes = [
    // Welcome
    {  
        method: 'GET',
        path: '/',
        handler: (request, response) => response('Welcome to Pet Shelter API')
    },
    
    // Welcome Custom
    {  
        method: 'GET',
        path: '/welcome/{name}/',
        handler: (request, response) => response(`Welcome ${request.params.name} to Pet Shelter API`)
    },
    
    // Read Pets
    {
        path: '/pets/',
        method: 'GET',
        handler: (request, response) => {
            const read = Knex('pets').where({status: true})
                .select('id','name','type','breed','location','latitude','longitude')
                .then(results => {
                    if(!results || results.length === 0) {
                        response({
                            error: true,
                            errMessage: 'No pets found!',
                        });
                    }
                    response({
                        count: results.length,
                        pets: results,
                    });

                })
                .catch(error => {
                    response('Server-Side Error >> '+error);
                });

        }
    }, 
    
    // Read a Pet
    {
        path: '/pets/{id}/',
        method: 'GET',
        handler: (request, response) => {
            const read = Knex('pets').where({id: request.params.id})
                .select('id','name','type','breed','location','latitude','longitude')
                .then(pet => {
                    if(!pet || pet.length === 0) {
                        response({
                            error: true,
                            errMessage: `Pet with ID = ${request.params.id} not found!`
                        });
                    }
                    response({
                        pet
                        //pet: results
                    });

                })
                .catch(error => {
                    response('Server-Side Error >> '+error);
                });
        },
        config: {
            validate: {
                params: {
                    id: Joi.number().integer().min(1)
                }
            }
        }
    },
    
    // Create
    {
        path: '/pets/',
        method: 'POST',
        handler: (request, response) => {
            const pet = request.payload;  // formdata or json
            const create = Knex('pets').insert({
                name: pet.name,
                type: pet.type,
                breed: pet.breed,
                location: pet.location,
                latitude: pet.latitude,
                longitude: pet.longitude,
                //picture_url: pet.picture_url,
                status: true
            }).then(result => {
                response({
                    status: 1,
                    message: `Pet (${pet.name}) successfully added.`
                });
            }).catch(error => {
                response({
                    status: 0,
                    message: `Server-Side Error >> ${error}`
                });
            });
        },
        config: {
            validate: {
                payload: {
                    name: Joi.string().alphanum().min(3).max(100).required(),
                    type: Joi.string().min(3).max(100).required(),
                    breed: Joi.string().min(3).max(100).required(),
                    location: Joi.string().min(3).max(100).required(),
                    latitude: Joi.number().min(-90).max(90).required(),
                    longitude: Joi.number().min(-180).max(180).required()
                    //picture_url: Joi.string().uri().trim().required()
                }
            }
        }
    },
    
    // Update
    {
        method: 'PUT',
        path:   '/pets/{id}/',
        handler: (request, response) => {
            const pet = request.payload;  // formdata or json
            const updates = Knex('pets')
            .where({id: request.params.id}) 
            .update({
                name: pet.name,
                type: pet.type,
                breed: pet.breed,
                location: pet.location,
                latitude: pet.latitude,
                longitude: pet.longitude
                //picture_url: pet.picture_url
            })
            .then(result => {
                response({
                    status: 1,
                    message: `Pet (${pet.name}) successfully updated.`
                });
            })
            .catch(error => {
                response({
                    status:0,
                    message: `Server-Side Error >> ${error}`
                });
            });
                
        },
        config: {
            validate: {
                payload: {
                    name: Joi.string().alphanum().min(3).max(100).required(),
                    type: Joi.string().min(3).max(100).required(),
                    breed: Joi.string().min(3).max(100).required(),
                    location: Joi.string().min(3).max(100).required(),
                    latitude: Joi.number().min(-90).max(90).required(),
                    longitude: Joi.number().min(-180).max(180).required()
                    //picture_url: Joi.string().uri().trim().required()
                },
                params: {
                    id: Joi.number().integer().min(1)
                }
            }
        }
    },
    
    // Delete
    {
        path: '/pets/{id}/',
        method: 'DELETE',
        handler: (request, response) => {
            const del = Knex('pets')
                .where({id: request.params.id})
                .del()
                .then(result => {
                    response({
                        status: 1,
                        message: `Pet with ID = ${request.params.id} successfully deleted`
                    });

                })
                .catch(error => {
                    response({
                        status: 0,
                        message: 'Server-Side Error >> '+error
                    });
                });
        },
        config: {
            validate: {
                params: {
                    id: Joi.number().integer().min(1)
                }
            }
        }
    }
];
export default routes;
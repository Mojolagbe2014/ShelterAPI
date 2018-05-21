
exports.up = function(knex, Promise) {

    return knex
        .schema
        .createTable( 'pets', function( petsTable ) {

            // Primary Key
            petsTable.increments();

            // Data 
            petsTable.string('name', 250).notNullable();
            petsTable.string('type', 250).notNullable();
            petsTable.string('breed', 100).notNullable();
            petsTable.string('location', 100).notNullable();
            petsTable.string('latitude', 100).notNullable();
            petsTable.string('longitude', 100).notNullable();
            //petsTable.string('picture_url', 250).notNullable();
            petsTable.boolean('status').notNullable().defaultTo( true );

            petsTable.timestamp('created_at').notNullable();
            
            petsTable.unique(['name', 'breed']);

        } );
//ID, a name, a type, a breed, a location (i.e. “Boston, MA”) and a latitude and longitude
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('pets');
};
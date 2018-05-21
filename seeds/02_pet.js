
exports.seed = function(knex, Promise) {
    var tableName = 'pets';
    var rows = [
        {
            name: 'Queen',
            type: 'Bird',
            breed: 'Pigeon',
            location: 'Winnipeg, MB',
            latitude: '49.80666189999999',
            longitude: '-97.168656',
            //picture_url: 'http://pngimg.com/upload/pigeon_PNG3423.png',
            status: true
        }
    ];

    return knex(tableName)
        .then(function() {
            // Inserts seed entries
            return knex.insert(rows).into(tableName);
        });

};
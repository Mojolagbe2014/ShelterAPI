
exports.seed = function(knex, Promise) {
    var tableName = 'pets';
    var rows = [
        {
            name: 'Ajaxis',
            type: 'Dog',
            breed: 'Beagle',
            location: 'Winnipeg, MB',
            latitude: '49.8160999',
            longitude: '-97.14895430000001',
            //picture_url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000934/Beagle-On-White-08.jpg',
            status: true
        }
    ];

    return knex(tableName)
        // Deletes ALL existing entries
        .del()
        .then(function() { 
            // Inserts seed entries
            return knex.insert(rows).into(tableName);
        });

};
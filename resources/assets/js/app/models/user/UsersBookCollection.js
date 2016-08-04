var UsersBook=require('./UsersBook');

//model список книг пользователей
var UsersBookCollection = Backbone.Collection.extend({
    model: UsersBook,
    url: 'http://bsa_laravel_rest.local/users/:id',
});

module.exports = UsersBookCollection;
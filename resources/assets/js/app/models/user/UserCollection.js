var User=require('./User.js');

var UserCollection = Backbone.Collection.extend({
    model: User,
    url: 'http://bsa_laravel_rest.local/users'
});

module.exports = UserCollection;

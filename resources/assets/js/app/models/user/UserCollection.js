var User=require('./User.js');

var UserCollection = Backbone.Collection.extend({
    model: User,
    url: 'http://bsa_laravel_rest.local/users'
})

// var usersCollection = function () {
//     return Backbone.Collection.extend({
//         url: '/api/users',
//     });
// };

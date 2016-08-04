var Book=require('./Book');

var BookCollection = Backbone.Collection.extend({
    model: Book,
    url: 'http://bsa_laravel_rest.local/books'
});

module.exports = BookCollection;
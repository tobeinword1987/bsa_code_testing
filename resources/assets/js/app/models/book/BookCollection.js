var Book=require('./Book');

var BookCollection = Backbone.Collection.extend({
    model: Book,
    // url: 'http://bsa_laravel_rest.local/books'
    url: 'books'
});

module.exports = BookCollection;
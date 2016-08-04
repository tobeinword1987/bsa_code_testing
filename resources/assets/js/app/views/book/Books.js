var BookInTable=require('./BookInTable');
var template=require('../../templates/book/books_table_template.hbs');

var Books = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-striped table-hover table-bordered',
    // template:window['JST']['resources/assets/js/app/templates/book/books_table_template.tpl'],
    template:template,
    childView: BookInTable,
    itemViewContainer: 'tbody'
});

module.exports = Books;
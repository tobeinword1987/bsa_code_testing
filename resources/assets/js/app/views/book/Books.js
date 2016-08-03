var BookInTable=require('./BookInTable');

var Books = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-striped table-hover table-bordered',
    template:window['JST']['resources/assets/js/app/templates/book/books_table_template.tpl'],
    childView: BookInTable,
    itemViewContainer: 'tbody'
});
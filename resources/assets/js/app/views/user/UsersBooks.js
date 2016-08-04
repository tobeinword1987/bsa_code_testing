var UsersBookInTable=require('./UsersBookInTable');

var template=require('../../templates/user/users_table_template.hbs');


var UsersBooks = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-striped table-hover table-bordered',
    // template:window['JST']['resources/assets/js/app/templates/user/users_table_template.tpl'],
    template:template,
    childView: UsersBookInTable,
    itemViewContainer: 'tbody'
});

module.exports = UsersBooks;
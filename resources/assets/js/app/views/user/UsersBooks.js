var UsersBookInTable=require('./UsersBookInTable');

var UsersBooks = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-striped table-hover table-bordered',
    template:window['JST']['resources/assets/js/app/templates/user/users_table_template.tpl'],
    childView: UsersBookInTable,
    itemViewContainer: 'tbody'
})
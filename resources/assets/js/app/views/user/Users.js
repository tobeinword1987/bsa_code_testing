var UserInTable=require('./UserInTable');

var Users = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-striped table-hover table-bordered',
    template:window['JST']['resources/assets/js/app/templates/user/users_table_template.tpl'],
    childView: UserInTable,
    itemViewContainer: 'tbody'
})

var UserInTable=require('./UserInTable');

var template=require('../../templates/user/users_table_template.hbs');

var Users = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-striped table-hover table-bordered',
    // template:window['JST']['resources/assets/js/app/templates/user/users_table_template.tpl'],
    template:template,
    childView: UserInTable,
    itemViewContainer: 'tbody'
});

module.exports = Users;

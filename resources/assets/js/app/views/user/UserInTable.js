var template=require('../../templates/user/users_table_row_template.hbs');

var UserInTable = Marionette.ItemView.extend({
    tagName: 'tr',
    // template:window['JST']['resources/assets/js/app/templates/user/users_table_row_template.tpl'],
    template:template,
    ui: {
        showFreeBooks: '#showFreeBooks',
        showUsersBooks: '#showUsersBooks',
    },
    events: {
        'click @ui.showFreeBooks': function () {
            app.trigger('show:freeBooks');
        },

        'click @ui.showUsersBooks': function () {
            app.trigger('show:usersBooks');
        },
    },
});

module.exports = UserInTable;
var template=require('../../templates/user/user_books_table_row_template.hbs');

var UsersBookInTable = Marionette.ItemView.extend({
    tagName: 'tr',
    // template:window['JST']['resources/assets/js/app/templates/user/user_books_table_row_template.tpl'],
    template:template,
    ui: {
    },
    events: {
    },
});

module.exports = UsersBookInTable;
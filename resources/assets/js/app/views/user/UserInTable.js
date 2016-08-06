var template=require('../../templates/user/users_table_row_template.hbs');

var UserInTable = Marionette.ItemView.extend({
    tagName: 'tr',
    // template:window['JST']['resources/assets/js/app/templates/user/users_table_row_template.tpl'],
    template:template,
        ui: {
            give: '.js-give'
        },
        events: {
            'click @ui.give': function () {
                app.trigger('give:book', this.model.get('id'));
            }
        }
});

module.exports = UserInTable;
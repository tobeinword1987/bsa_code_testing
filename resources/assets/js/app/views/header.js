var template=require('../templates/header_template.hbs');

var header = Marionette.ItemView.extend({
    // template:window['JST']['resources/assets/js/app/templates/header_template.tpl'],
    template:template,
    tagName: 'nav',
    id: 'header',
    className: 'navbar navbar-inverse',
    ui: {
        showUsers: '.js-users',
        showBooks: '.js-books',
        createUser: '.js-add-user',
        createBook: '.js-add-book'
    },
    events: {
        'click @ui.showUsers': function () {
            app.trigger('show:users');
        },

        'click @ui.showBooks': function () {
            app.trigger('show:books');
        },
        'click @ui.createUser': function () {
            app.trigger('create:user');
        },
        'click @ui.createBook': function () {
            app.trigger('create:book');
        }
    }

});

module.exports = header;
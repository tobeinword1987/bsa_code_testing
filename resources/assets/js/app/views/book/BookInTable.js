var template=require('../../templates/book/books_table_row_template.hbs');

var BookInTable = Marionette.ItemView.extend({
    tagName: 'tr',
    // template:window['JST']['resources/assets/js/app/templates/book/books_table_row_template.tpl'],
    template:template,
    ui: {
        delete: '#book_del_button',
        err: '.js-errors'
    },
    events: {
        'click @ui.delete': function (e) {
            e.preventDefault();
            var view = this;
            var book = this.model;
            var userId = book.get('user_id');
            if (userId!=null) {
                alert('Эту книгу нельзя удалить. Она находится у пользователя c ID=' + userId +'!');
            }
            else
            {
                book.destroy({
                    error: function (model, response, options)
                    {
                        alert(response.responseJSON.data.description);
                    },
                    success: function (){
                        alert('Вы успешно удалили книгу');
                    }
                });
            }
        }
    }
});

module.exports = BookInTable;
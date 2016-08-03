var CreateBook = Marionette.ItemView.extend({
    template:window['JST']['resources/assets/js/app/templates/book/create_book_template.tpl'],
    ui: {
        save: '.js-save',
        form: 'form',
        err: '.js-errors'
    },
    modelEvents: {
        'change': 'render'
    },
    events: {
        'click @ui.save': function (e) {
            e.preventDefault();
            var view = this;
            var book = this.model;
            this.ui.err.empty();
            var title = this.ui.form.find("input[name='title']").val();
            var author = this.ui.form.find("input[name='author']").val();
            var year = this.ui.form.find("input[name='year']").val();
            var genre = this.ui.form.find("input[name='genre']").val();
            this.model.unset('id');

            if(book.save({
                    title: title,
                    author: author,
                    year: year,
                    genre:genre,
                })){
                view.ui.err.append('<ul>');
                view.ui.err.find('ul').append('<li>' + 'Вы создали новую книгу!' + '</li>');
            } else {
                //вызывается если модель не прошла валидацию
                var errors = this.model.validationError; //array
                view.ui.err.append('<ul>');
                $.each(book.validationError, function (key, value) {
                    view.ui.err.find('ul').append('<li>' + value + '</li>');
                })
            }
        }
    }
});
var CreateUser = Marionette.ItemView.extend({
    template:window['JST']['resources/assets/js/app/templates/user/create_user_template.tpl'],
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
            var user = this.model;
            this.ui.err.empty();
            var firstname = this.ui.form.find("input[name='firstname']").val();
            var lastname = this.ui.form.find("input[name='lastname']").val();
            var email = this.ui.form.find("input[name='email']").val();
            this.model.unset('id');

            if(user.save({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                })){
                view.ui.err.append('<ul>');
                view.ui.err.find('ul').append('<li>' + 'Вы создали нового пользователя!' + '</li>');
            } else {
                //вызывается если модель не прошла валидацию
                var errors = this.model.validationError; //array
                view.ui.err.append('<ul>');
                $.each(user.validationError, function (key, value) {
                    view.ui.err.find('ul').append('<li>' + value + '</li>');
                })
            }
        }
    }
});
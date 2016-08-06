var template=require('../../templates/user/give_book_template.hbs');

var GiveBookView = Marionette.ItemView.extend({
    template: template,
    ui: {
        dropdownlist: '#select',
        submit: '.js-submit'
    },
    events: {
        'click @ui.submit': function (e) {
            e.preventDefault();

            var userid = this.model.get('id');

            var book_id = this.ui.dropdownlist.val();
            if(book_id == '') alert('Choose book');
            else {
                var Book1 = Backbone.Model.extend({
                    // urlRoot: 'http://bsa_laravel_rest.local/users/' + userid+'/books/',
                    urlRoot: 'users/' + userid+'/books/',
                    defaults: {
                        id: '',
                        title: '',
                        author: '',
                        genre: '',
                        year: '',
                        user: {
                            id: '',
                            firstname: '',
                            lastname: '',
                            email: ''
                        }
                    }});

                var book = new Book1({id: book_id});
                book.save({user_id: userid}, {validate: false}).
                then(function () {
                    alert('Book was attached succesfully');
                });
            }
        }
    }
});

module.exports=GiveBookView;
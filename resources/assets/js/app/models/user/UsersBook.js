//model книга пользователя
var UsersBook = Backbone.Model.extend({
    urlRoot: 'http://bsa_laravel_rest.local/users/:id',
    defaults: {
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        books: {
            id: '',
            title: '',
            author: '',
            genre: '',
            year: ''
        }
    }
})
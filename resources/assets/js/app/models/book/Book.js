var Book = Backbone.Model.extend({
    urlRoot: 'http://bsa_laravel_rest.local/books',
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
    },
    validate: function(attrs, options) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var reAplpha=/^[A-Za-zА-Яа-я]*$/;
        var reYear=/^[0-9]*$/;

        var errors = {}
        if (! attrs.title) {
            errors.title = "Title can't be blank";
        }
        if (! attrs.author) {
            errors.author = "Author can't be blank";
        }
        else if(!reAplpha.test(attrs.author))
        {
            errors.author='Lastname has to contain only letters';
        }
        if (! attrs.genre) {
            errors.genre = "Genre can't be blank";
        }
        else if(!reAplpha.test(attrs.genre))
        {
            errors.genre='Genre has to contain only letters';
        }

        if (! attrs.year) {
            errors.year = "Year can't be blank";
        }
        else
        if(!reYear.test(attrs.year))
        {
            errors.year = "Year is invalid";
        }
        else if ((attrs.year<100) || (attrs.year>2016))
        {
            errors.year = "The year must be at least 1000 and may not be greater than 2016";
        }
        if( ! this.isEmpty(errors)){
            return errors;
        }
    }
});

module.exports = Book;

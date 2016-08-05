var User = Backbone.Model.extend({
    // urlRoot: 'http://bsa_laravel_rest.local/users',
    urlRoot: 'users',
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
    },
    validate: function(attrs, options) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var reAplpha=/^[A-Za-zА-Яа-я]*$/;

        var errors = {}
        if (! attrs.firstname) {
            errors.firstname = "FirstName can't be blank";
        }
        if (! attrs.lastname) {
            errors.lastname = "Lastname can't be blank";
        }
        else if(!reAplpha.test(attrs.lastname))
        {
            errors.lastname='Lastname has to contain only letters';
        }

        if (! attrs.email) {
            errors.email = "Email can't be blank";
        }
        else
        if(!re.test(attrs.email))
        {
            errors.email = "Email is invalid";
        }
        if( !_.isEmpty(errors)){
            return errors;
        }
    }
});

module.exports = User;
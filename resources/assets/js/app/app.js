 _ = require('underscore');
$ = require('jquery');
Backbone = require('backbone');
Backbone.$ = $;
Marionette = require('backbone.marionette');

var Controller=require('./controllers/Controller');
var header=require('./views/header');
// var User=require('./models/user/User');
// var UserCollection=require('./models/user/UserCollection');
// var Users=require('./views/user/Users');
// var Book=require('./models/book/Book');
// var CreateUser=require('./views/user/CreateUser');
// var BookCollection=require('./models/book/BookCollection');
// var Books=require('./views/book/Books');
// var CreateBook=require('./views/book/CreateBook');
// var UsersBookCollection=require('./models/user/UsersBookCollection');
// var UsersBooks=require('./views/user/UsersBooks.js');


// if ((_ref = window.JST) == null) {
//     window.JST = {};
// }


app = new Marionette.Application();

app.addRegions({
    main: '#main',
    header: '#header'
});

app.Router = Marionette.AppRouter.extend({
    appRoutes: {
        'user': 'showUsers',
        'user/create': 'createUser',

        'book': 'showBooks',
        'book/create': 'createBook',

        'book/showFreeBooks' : 'showFreeBooks',
        'book/showUsersBooks' : 'showUsersBooks'
    }
});

routerAPI = {
    showUsers: function () {
        Controller.showUsers();
    },
    createUser: function () {
        Controller.createUser();
    },
    showBooks: function () {
        Controller.showBooks();
    },
    createBook: function () {
        Controller.createBook();
    },

    showFreeBooks: function () {
        Controller.showFreeBooks();
    },

    showUsersBooks: function () {
        Controller.showUsersBooks();
    }
};

app.navigate = function (route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

app.getCurrentRoute = function () {
    return Backbone.history.fragment;
};


app.on('start', function () {
    app.getRegion('header').show(new header());
    new app.Router({
        controller: routerAPI
    });

    app.on('show:users', function () {
        Backbone.history.navigate('user', {
            trigger: true
        });
    });

    app.on('create:user', function () {
        Backbone.history.navigate('user/create', {
            trigger: true
        });
    });

    app.on('show:books', function () {
        Backbone.history.navigate('book', {
            trigger: true
        });
    });

    app.on('create:book', function () {
        Backbone.history.navigate('book/create', {
            trigger: true
        });
    });

    app.on('show:freeBooks', function () {
        Backbone.history.navigate('book/:id/showFreeBooks', {
            trigger: true
        });
    });

    app.on('show:usersBooks', function () {
        Backbone.history.navigate('book/showUsersBooks', {
            trigger: true
        });
    });


    if (Backbone.history) {
        Backbone.history.start();

        if (this.getCurrentRoute() === "") {
            Backbone.history.navigate('user', {
                trigger: true
            });
        }
    }
});

app.start();

module.exports=app;
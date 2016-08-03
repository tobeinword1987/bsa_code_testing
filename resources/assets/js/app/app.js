$ = require("jquery");
// window.$ = $;

Backbone = require("backbone");
Backbone.$ = require("jquery");
_ = require("underscore");

Marionette = require('backbone.marionette');

var header=require('./views/header');

var Controller=require('./controllers/Controller');

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

app.on('start', function () {
    app.getRegion('header').show(new header());
    new app.Router({
        controller: routerAPI
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

app.navigate = function (route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

app.getCurrentRoute = function () {
    return Backbone.history.fragment;
};

app.start();

module.exports=app;
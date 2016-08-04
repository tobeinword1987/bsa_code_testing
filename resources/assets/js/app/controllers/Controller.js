var User=require('../models/user/User');
var UserCollection=require('../models/user/UserCollection');
var Users=require('../views/user/Users');
var Book=require('../models/book/Book');
var CreateUser=require('../views/user/CreateUser');
var BookCollection=require('../models/book/BookCollection');
var Books=require('../views/book/Books');
var CreateBook=require('../views/book/CreateBook');
var UsersBookCollection=require('../models/user/UsersBookCollection');
var UsersBooks=require('../views/user/UsersBooks.js');

var Controller = {
    showUsers: function () {
        var users = new UserCollection();
        users.fetch();

        var usersView = new Users({
            collection: users
        });

        app.main.show(usersView);
    },
    createUser: function () {
        var view = new CreateUser({model: new User()});

        app.main.show(view);
    },

    showBooks: function () {
        var books = new BookCollection();

        books.fetch();

        var booksView = new Books({
            collection: books
        });
        app.main.show(booksView);
    },
    createBook: function () {
        var createBookview = new CreateBook({model: new Book()});
        app.main.show(createBookview);
    },

    showFreeBooks: function(){

    },

    showUsersBooks: function(){
        var usersbooks = new UsersBookCollection({
        });
        usersbooks.fetch();

        var usersbooksview=new UsersBooks({
            collection:usersbooks,
        });
        app.main.show(usersbooksview);
    }
}

console.log(Controller);

module.exports = Controller;
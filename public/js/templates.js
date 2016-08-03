this["JST"] = this["JST"] || {};

this["JST"]["resources/assets/js/app/templates/book/books_table_row_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/html" id="books-table-row-template">\n\n    <td>' +
__e( title ) +
'</td>\n    <td>' +
__e( author ) +
'</td>\n    <td>' +
__e( genre ) +
'</td>\n    <td>' +
__e( year ) +
'</td>\n    <td>' +
__e( user_id ) +
'</td>\n    <td>\n        <button class="btn btn-small btn-warning js-edit">Edit</button>\n        <button id="book_del_button" class="btn btn-small btn-danger pull-right js-delete">Delete</button>\n\n    </td>\n\n</script>';

}
return __p
};

this["JST"]["resources/assets/js/app/templates/book/books_table_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/html" id="books-table-template">\n    <thead>\n    <tr>\n        <th>Title:</th>\n        <th>Author:</th>\n        <th>Genre:</th>\n        <th>Year:</th>\n        <th>Owner:</th>\n        <th>Action:</th>\n    </tr>\n    </thead>\n    <tbody>\n\n    </tbody>\n</script>';

}
return __p
};

this["JST"]["resources/assets/js/app/templates/book/create_book_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/html" id="create-book-template">\n    <form>\n        <input class="form-control" name="id" type="hidden" value="">\n        <div class="form-group">\n            <label for="">Title</label>\n            <input class="form-control" id="title" name="title" type="text" value="' +
__e( title ) +
'">\n        </div>\n        <div class="form-group">\n            <label for="">Author</label>\n            <input class="form-control" name="author" type="text" value="' +
__e( author ) +
'">\n        </div>\n        <div class="form-group">\n            <label for="">Year</label>\n            <input class="form-control" name="year" type="text" value="' +
__e( year ) +
'">\n        </div>\n        <div class="form-group">\n            <label for="">Genre</label>\n            <input class="form-control" name="genre" type="text" value="' +
__e( genre ) +
'">\n        </div>\n        <input class="btn btn-primary js-save" type="submit" value="Save">\n    </form>\n    <div class="js-errors"></div>\n</script>';

}
return __p
};

this["JST"]["resources/assets/js/app/templates/header_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/html" id="header-template">\n    <ul class="nav navbar-nav">\n        <li><a style="cursor: pointer;" class="js-books">Users</a></li>\n        <li><a style="cursor: pointer;" class="js-books">Books</a></li>\n        <li><a style="cursor: pointer;" class="js-add-user">Add User</a></li>\n        <li><a style="cursor: pointer;" class="js-add-book">Add Book</a></li>\n    </ul>\n</script>';

}
return __p
};

this["JST"]["resources/assets/js/app/templates/user/create_user_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/html" id="create-user-template">\n    <form>\n        <input class="form-control" name="id" type="hidden" value="">\n        <div class="form-group">\n            <label for="">First Name</label>\n            <input class="form-control" id="firstname" name="firstname" type="text" value="' +
__e( firstname ) +
'">\n        </div>\n        <div class="form-group">\n            <label for="">Last Name</label>\n            <input class="form-control" name="lastname" type="text" value="' +
__e( lastname ) +
'">\n        </div>\n\n        <div class="form-group">\n            <label for="">Email</label>\n            <input class="form-control" name="email" type="text" value="' +
__e( email ) +
'">\n        </div>\n        <input class="btn btn-primary js-save" type="submit" value="Save">\n    </form>\n\n    <div class="js-errors"></div>\n</script>';

}
return __p
};

this["JST"]["resources/assets/js/app/templates/user/user_books_table_row_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/html" id="user-books-table-row-template">\n    <td>' +
__e( title ) +
'</td>\n    <td>' +
__e( author ) +
'</td>\n    <td>' +
__e( genre ) +
'</td>\n    <td>' +
__e( year ) +
'</td>\n    <td>' +
__e( user_id ) +
'</td>\n    <td>\n        <button class="btn btn-small btn-warning js-edit">return</button>\n    </td>\n</script>';

}
return __p
};

this["JST"]["resources/assets/js/app/templates/user/users_table_row_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/html" id="users-table-row-template">\n    <td>' +
__e( firstname ) +
'</td>\n    <td>' +
__e( lastname ) +
'</td>\n    <td>' +
__e( email ) +
'</td>\n    <td>\n        <button id="showUsersBooks" class="btn btn-small btn-success js-return">Return a book</button>\n        <button id="showFreeBooks" class="btn btn-small btn-default js-give">Take a free book</button>\n        <button class="btn btn-small btn-warning js-edit">Edit</button>\n        <button class="btn btn-small btn-danger pull-right js-delete">Delete</button>\n\n    </td>\n</script>';

}
return __p
};

this["JST"]["resources/assets/js/app/templates/user/users_table_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/html" id="users-table-template">\n    <thead>\n    <tr>\n    <th>FirstName:</th>\n<th>LastName:</th>\n<th>Email:</th>\n<th>Books:</th>\n<th>Action:</th>\n</tr>\n</thead>\n<tbody>\n\n</tbody>\n</script>';

}
return __p
};
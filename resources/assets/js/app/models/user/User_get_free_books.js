var User2 = Backbone.Model.extend({
    url: function () {
        // return 'http://bsa_laravel_rest.local/users/' + this.get('id')+'/books';
        return 'users/' + this.get('id')+'/books';
    }
});

module.exports=User2;
define(function(require, exports, module) {
    var Wisher = require('app/models/Wisher');

    module.exports = Backbone.Firebase.Collection.extend({
        //localStorage: new Backbone.LocalStorage("keyAno-christy"),
        model: Wisher

    });
});
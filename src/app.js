/*globals define*/
define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var mainContext = Engine.createContext();
    mainContext.setPerspective(2000);

    var KeyAno = require('app/KeyAno');

    var keyAno = new KeyAno();

    mainContext.add(keyAno);

});

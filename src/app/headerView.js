define(function(require, exports, module) {

    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');

    var Constant = require('app/Constant');

    function HeaderView(options){

        View.apply(this,arguments);

        _setupBackground.call(this);
    }

    function _setupBackground(){
        this.img = new Surface();
        this.setImg();
        this.add(this.img);
    }

    HeaderView.prototype = Object.create(View.prototype);
    HeaderView.prototype.constructor = HeaderView;

    HeaderView.prototype.setImg = function(){
        this.img.setContent([
            '<div class="header-background-image">',
            '<img src="./assets/img/the-pianist.jpg"',
            'style =" max-width:100%;',
            'max-height: 100%;',
            'height:',Constant.HeaderSize,'px"/>',
            '</div>'
        ].join(''))
    };

    module.exports = HeaderView;

});

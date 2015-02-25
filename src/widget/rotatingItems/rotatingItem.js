define(function(require, exports, module) {

    var View = require('famous/core/View');
    var Node = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Transitionable = require('famous/transitions/Transitionable');

    var JumpUpSurfaceItem = require('widget/JumpUpSurface/JumpUpSurfaceItem');
    var SvgTemplates = require('app/SvgTemplates');
    var Constant = require('app/Constant');

    function RotatingItem(options){

        View.apply(this,arguments);
        this.index = options.index;
        _init.call(this);
    }

    function _init(){
        this.transitionable = new Transitionable(0);
        this.transitionable.set(1000);

        var color= 'hsl(' +this.index*360/this.options.num + ',100%,85%)';
        var floatingItem = new Surface({
            size: [130, 130],
            content: '<div>'+SvgTemplates[_.keys(SvgTemplates)[this.index]]([130, 130], color)+'</div>'
        });
        var floatingItemMod = new Modifier({
            transform: function(){
                return Transform.moveThen([this.transitionable.get(), 0, 0], Transform.rotateZ(i*2*Math.PI/this.options.num))
            }.bind(this)
        });
        this.floatItemsNode.add(floatingItemMod).add(floatingItem);
    }

    RotatingItem.prototype = Object.create(View.prototype);
    RotatingItem.prototype.constructor = RotatingItem;



    module.exports = RotatingItem;

});

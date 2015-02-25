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

    function WishView(options){

        View.apply(this,arguments);

        _init.call(this);
    }

    function _init(){
        this.setWishSurface();
        this.setFloatingItems();
    }

    WishView.prototype = Object.create(View.prototype);
    WishView.prototype.constructor = WishView;

    WishView.prototype.setWishSurface = function(){
        this.wishSurface = new Surface({
            size: [300, 300],
            content: '<div class="wish-surface">my wish</div>',
            properties:{
                background: 'yellow'
            }
        });
        this.wishSurfaceMod = new Modifier({
            origin: [0.5, 0.5],
            align: [0.5, 0.5],
            transform: Transform.translate(0,100,0)
        });
        this.add(this.wishSurfaceMod).add(this.wishSurface);
    };

    WishView.prototype.setFloatingItems = function() {
        var num = 8;
        var initialTime = Date.now();
        this.floatItemsNode = new Node();
        this.floatItemsNodeMod = new Modifier({
            origin: [0.5, 0.5],
            align: [0.5, 0.5],
            transform : function () {
                return Transform.thenMove(Transform.rotateZ(.001 * (Date.now() - initialTime)), [0, 100, 0]);
            }
        });
        this.add(this.floatItemsNodeMod).add(this.floatItemsNode);
        for (var i= 0; i < num; i++){
            var color= 'hsl(' +i*360/num + ',100%,85%)';
            var floatingItem = new Surface({
                size: [130, 130],
                content: '<div>'+SvgTemplates[_.keys(SvgTemplates)[i]]([130, 130], color)+'</div>'
            });
            var transitionable = new Transitionable(0);
            transitionable.set(1000);
            var floatingItemMod = new Modifier({
                transform: Transform.moveThen([transitionable.get(), 0, 0], Transform.rotateZ(i*2*Math.PI/num))
            });
            this.floatItemsNode.add(floatingItemMod).add(floatingItem);
        }
    };


    module.exports = WishView;

});

define(function(require, exports, module){
    var Transform      = require('famous/core/Transform');
    var Modifier       = require('famous/core/Modifier');
    var Transitionable = require('famous/transitions/Transitionable');
    var View           = require('famous/core/View');
    var StateModifier  = require('famous/modifiers/StateModifier')
    var Easing = require('famous/transitions/Easing');

    var SnapTransition = require('famous/transitions/SnapTransition');
    Transitionable.registerMethod('snap', SnapTransition);
    var initialTime = Date.now();


    function HoverItemView(options) {
        View.apply(this, arguments);
        if(options && typeof options.shakeAngle !== undefined) shakeAngle = options.shakeAngle;
        if(options && typeof options.shakeAngle !== undefined) deltaZ = options.deltaZ;
        this.add(_createShakeMod.call(this, this.options.shakeAngle)).add(this.options.item);
    }

    HoverItemView.prototype = Object.create(View.prototype);
    HoverItemView.prototype.constructor = HoverItemView;

    HoverItemView.DEFAULT_OPTIONS = {
        shakeAngle : 0.1,
        deltaZ : 20,
        item : undefined
    };

    function _createShakeMod(){
        var shakeMod = new Modifier({
            origin: [.5,.5],
            align:[0,0]
        });
        var shakeState = new Transitionable(0);
        shakeMod.transformFrom(function (){return Transform.rotateZ(shakeState.get())});
        shakeMod.transformFrom(
            function(){
                return Transform.rotateZ(shakeAngle* Math.sin((Date.now() - initialTime)/100));
            });
        return shakeMod;
    }

    module.exports = HoverItemView;
});

define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var RenderNode = require('famous/core/RenderNode');
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var Modifier = require('famous/core/Modifier');
//    var Modifier = require('famous/modifiers/StateModifier');
    var Transform = require('famous/core/Transform');
    var Transitionable = require('famous/transitions/Transitionable');
    var MouseSync = require('famous/inputs/MouseSync');
    var TouchSync = require('famous/inputs/TouchSync');
    var GenericSync = require('famous/inputs/GenericSync');
    var Rectangle = require('famous/physics/bodies/Rectangle');
    var Particle = require('famous/physics/bodies/Particle');
    var Vector = require('famous/math/Vector');
    var RenderController = require("famous/views/RenderController");

    function TipsView(options) {

        View.call(this);
        _setupSurf.call(this);
        _setupEvent.call(this);

    }

    TipsView.prototype = Object.create(View.prototype);
    TipsView.prototype.constructor = TipsView;

    TipsView.DEFAULT_OPTIONS = {
        period: 5001,
        maxOpacity: 0.35
    };

    function _setupSurf(){
        this.tipsView = new Surface({
            size:[undefined,100],
            content: '<div class="tips-view">Press any keys 0-9 <br>or A-Z to play a sound</div>'
        });
        this.tipsViewMod = new Modifier({
            origin:[0.5,0.5]
        });
        this.setChanging();

        this.add(this.tipsViewMod).add(this.tipsView);
    }

    function _setupEvent(){
        this._eventInput.on('setFading',this.setFading.bind(this));
        this._eventInput.on('setChanging',this.setChanging.bind(this));
    }

    TipsView.prototype.setChanging = function(){
        var offset = Date.now()%this.options.period - Math.floor(this.options.period/2);
        this.tipsViewMod.opacityFrom(function(){
            return Math.abs((Date.now()-offset)%this.options.period - Math.floor(this.options.period/2))/Math.floor(this.options.period/2)*this.options.maxOpacity;
        }.bind(this));
        this.isShowing = true;
    };

    TipsView.prototype.setFading = function(){
        this.tempOpacity = new Transitionable(this.tipsViewMod.getOpacity());
        this.tipsViewMod.opacityFrom(function(){
            return this.tempOpacity.get();
        }.bind(this));
        this.tempOpacity.set(0,{duration:this.tempOpacity.get()/this.options.maxOpacity*(this.options.period/2)})
        this.isShowing = false;
    };



    module.exports = TipsView;


});

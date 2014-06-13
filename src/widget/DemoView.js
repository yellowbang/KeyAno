define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var RenderNode = require('famous/core/RenderNode');
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var ImageSurface = require('famous/surfaces/ImageSurface');
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

    function DemoView(options) {

        View.call(this);
        _setupSurf.call(this);
        _setupEvent.call(this);

    }

    DemoView.prototype = Object.create(View.prototype);
    DemoView.prototype.constructor = DemoView;

    DemoView.DEFAULT_OPTIONS = {

    };

    function _setupSurf(){
        this.demoViewMod = new Modifier({
            origin:[0.,1],
            transform:Transform.translate(0,-51,0)
        });
        this.demoView = new Surface({
            size:[70,70],
            content: '<div class="bubble"><a href="http://www.w3schools.com/" target="_blank"><img src="/assets/img/bubble-blue.png" width="70px" height="70px"/><span class="bubble-word">DEMO</span></a></div>'
        });
        this.add(this.demoViewMod).add(this.demoView);


    }


    function _setupEvent(){
    }


    module.exports = DemoView;


});

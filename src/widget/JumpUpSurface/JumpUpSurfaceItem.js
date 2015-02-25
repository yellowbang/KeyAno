define(function(require, exports, module) {
    // import dependencies
    var RenderNode = require('famous/core/RenderNode');
    var View = require('famous/core/View');
    var RenderController = require("famous/views/RenderController");
    var Surface = require('famous/core/Surface');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var Modifier = require('famous/core/Modifier');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Transform = require('famous/core/Transform');
    var Easing = require('famous/transitions/Easing');
    var PhysicsEngine = require('famous/physics/PhysicsEngine');
    var Particle = require('famous/physics/bodies/Particle');
    var Rectangle = require('famous/physics/bodies/Rectangle');
    var Drag = require('famous/physics/forces/Drag');
    var Spring = require('famous/physics/forces/Spring');
    var VectorField = require ('famous/physics/forces/VectorField');
    var Distance = require ('famous/physics/constraints/Distance');
    var Vector = require('famous/math/Vector');
    var GenericSync         = require('famous/inputs/GenericSync');
    var TouchSync           = require('famous/inputs/TouchSync');
    var MouseSync           = require('famous/inputs/MouseSync');
    var Transitionable      = require('famous/transitions/Transitionable');
    var Timer      = require('famous/utilities/Timer');

    var ShakingItemView = require('widget/ShakingItemView');

    var SvgTemplates = require('app/SvgTemplates');

    var ITEM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var SPEED = [1,1.05,1.1,1.15,1.2,1.25,1.3,1.35];

    function JumpUpSurfaceItem() {
        window.TT = Transform;
        window.PE = this;

        View.apply(this, arguments);
        this.options.initPosition = [(window.innerWidth-this.options.fontSizeFront)*Math.random(),window.innerHeight+this.options.size[1]-200,0];
        this.renderController = new RenderController();
        this.renderNode = new RenderNode();
        this.add(this.renderController);

        _createView.call(this);
        _createParticle.call(this);

    }

    JumpUpSurfaceItem.prototype = Object.create(View.prototype);
    JumpUpSurfaceItem.prototype.constructor = JumpUpSurfaceItem;

    JumpUpSurfaceItem.DEFAULT_OPTIONS = {
        size: [70,70],
        word: ITEM[Math.floor(Math.random()*ITEM.length)],
        initVelocity: [0,-SPEED[Math.floor(Math.random()*SPEED.length)],0],
        fontSizeFront: '90',
        fontSizeBack: '90',
        color: 'hsl('+Math.random()*360+',100%,85%)'
    };

    function _createView(){
        this.wordBack = new Surface({
            size: [true,true],
            properties:{
                fontSize:this.options.fontSizeBack+'px',
                color: this.options.color
            }
        });
        this.wordFront = new Surface({
            size: [true,true],
            properties:{
                fontSize:this.options.fontSizeFront+'px',
                color: this.options.color
            }
        });
        this.setWord();
    }

    function _createParticle(){
        this.particle = new Particle({
            position: new Vector(this.options.initPosition),
            velocity: new Vector(this.options.initVelocity)
        });
        this.renderNode.add(this.particle).add(new ShakingItemView({item:this.wordBack, shakeAngle: 0.05}));
        this.renderController.show(this.renderNode);
        Timer.setTimeout(function(){
            this.renderController.hide();
        }.bind(this),3000)
    }

    JumpUpSurfaceItem.prototype.setWord = function(){
//        var content = ['<div class="jump-up-surface-word">',this.options.word,'</div>'].join('');
//        var content = ['<div class="jump-up-surface-word">',this.options.word,'</div>'].join('');
        var content = SvgTemplates[_.keys(SvgTemplates)[Math.floor(Math.random()*_.keys(SvgTemplates).length)]](this.options.size,this.options.color);
//        this.wordFront.setContent(['<div style="color:#000000">',content,'</div>'].join(''));
        this.wordBack.setContent(['<div>',content,'</div>'].join(''));
    };

    module.exports = JumpUpSurfaceItem;

});

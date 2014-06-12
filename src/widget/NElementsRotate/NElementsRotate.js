define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var View = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');
    var PhysicsEngine = require('famous/physics/PhysicsEngine');
    var Spring = require('famous/physics/forces/Spring');
    var RotationalDrag = require('famous/physics/forces/RotationalDrag');
    var Drag = require('famous/physics/forces/Drag');
    var VectorField = require('famous/physics/forces/VectorField');
    var Distance = require('famous/physics/constraints/Distance');
    var Vector = require('famous/math/Vector');
    var Particle = require('famous/physics/bodies/Particle');

    var Constant = require('app/Constant');
    var NElementsRotateItem = require('widget/NElementsRotate/NElementsRotateItem');

    function NElementsRotate(options) {

        this.physicsEngine = new PhysicsEngine();
        View.apply(this, arguments);
        _setupForce.call(this);
        _setupEvent.call(this);
        _setupItems.call(this);
    }

    NElementsRotate.prototype = Object.create(View.prototype);
    NElementsRotate.prototype.constructor = NElementsRotate;

    NElementsRotate.DEFAULT_OPTIONS = {
        num:Constant.Title.length,
        radius: window.innerWidth*0.37,
        yPos: window.innerHeight*0.13,
        initSpeed: 0.25
    };

    function _setupForce(){
        this.rotationalDrag = new Drag({
            strength: this.options.DragStrength
        });
        this.radius = new Distance({
            anchor : new Vector(this.options.RadiusPosition),
            length : this.radiusLength
        });
    }

    function _setupEvent(){

    }

    function _setupItems(){
        var delAngle = 2*Math.PI / this.options.num;
        for (var i = 0; i<this.options.num; i++){
            this._addItem({
                index: i,
                color: 'hsl('+i/this.options.num*360+',100%,88%)',
                itemPosition: this.getItemPosition(i*delAngle),
                velocity: new Vector(this.getItemVelocity(i*delAngle))
            });
        }
    }

    NElementsRotate.prototype._addItem = function(options){
        var item = new NElementsRotateItem({
            physicsEngine:this.physicsEngine,
            content: this.setItemContent(Constant.Title[options.index]),
            color: options.color,
            radiusPosition: [window.innerWidth/2,this.options.yPos,0],
            itemPosition : options.itemPosition,
            velocity: (options.velocity)? options.velocity.normalize(this.options.initSpeed) : null
        });
        this.physicsEngine.attach([this.radius,this.rotationalDrag], item.particle);
        this.add(item);
    };

    NElementsRotate.prototype.setItemContent = function(word){
        return ['<div class="n-element-rotate-word">',
            word,
            '</div>'].join('')
    };

    NElementsRotate.prototype.getItemPosition = function(angle){
        var x = window.innerWidth/2 - Math.cos(angle)*this.options.radius;
        var z = Math.sin(angle)*this.options.radius;
        return [x,this.options.yPos,z]
    };

    NElementsRotate.prototype.getItemVelocity = function(angle){
        var x = -Math.sin(angle);
        var z = -Math.cos(angle);
        return [x,0,z];
    };

    module.exports = NElementsRotate;


});

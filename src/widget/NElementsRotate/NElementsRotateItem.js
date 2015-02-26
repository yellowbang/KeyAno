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

    function NElementsRotateItem(options) {

        this.physicsEngine = options.physicsEngine;

        View.apply(this, arguments);
        this.radiusLength = this.getDistance(this.options.radiusPosition, this.options.itemPosition);
        _addItem.call(this);
        _setupForce.call(this);
        _setupEvent.call(this);
    }

    NElementsRotateItem.prototype = Object.create(View.prototype);
    NElementsRotateItem.prototype.constructor = NElementsRotateItem;

    NElementsRotateItem.DEFAULT_OPTIONS = {
        content: 'Hello',
        color:'yellow',
        size : [100,100],
        radiusPosition: [window.innerWidth/2,window.innerHeight/2,0],
        itemPosition : [0.15*window.innerWidth, window.innerHeight/2, 0],
        velocity : [0,0,0.25],
        forceStrength: 0.005,
        maxSpeed: 0.25,
        dragStrength: 0.00022323
    };

    function _setupForce(){
        this.rotationalDrag = new Drag({
            strength: this.options.dragStrength
        });
        this.radius = new Distance({
            anchor : new Vector(this.options.radiusPosition),
            length : this.radiusLength
        });
        this.physicsEngine.attach([this.radius,this.rotationalDrag], this.particle);
    }

    function _setupEvent(){
        Engine.on('keydown',function(e){
            if (e.keyCode >= 48 && e.keyCode <= 90){
                this.pushRotate();
            }
        }.bind(this));
        this._eventInput.on('rorate', function(){
            this.pushRotate()
        }.bind(this))
    }

    function _addItem(){
        this.item = new Surface({
            content:this.options.content,
            size:this.options.size,
            classes: ['bon-surf'],
            properties:{
                color: this.options.color
            }
        });
        this.itemMod = new Modifier({
            origin:[0.5,0.5],
            align:[0,0.05],
            transform:Transform.translate(-this.options.size[0]/2,-this.options.size[1]/2,0)
        });

        this.particle = new Particle({
            velocity: this.options.velocity,
            position: new Vector(this.options.itemPosition)
        });

        this.itemMod.opacityFrom(function(){
            var zPos = this.particle.getPosition()[2];
            return (zPos + this.radiusLength) / 2 / this.radiusLength
        }.bind(this));

        this.physicsEngine.addBody(this.particle);
        this.add(this.particle).add(this.itemMod).add(this.item);
    }

    NElementsRotateItem.prototype.getDistance = function(a,b){
        function dis(x,y){
            return Math.pow(x-y,2)
        }
        return Math.sqrt(dis(a[0],b[0])+dis(a[1],b[1])+dis(a[2],b[2]))
    };


    NElementsRotateItem.prototype.pushRotate = function(){
        var v = new Vector(this.particle.getVelocity());
        if (this.getVelocityMagnitude(v)<= this.options.maxSpeed){
            var pos = this.particle.getPosition();
            var x = this.options.radiusPosition[0] - pos[0];
            var z = pos[2];
            this.particle.applyForce(new Vector([-z/this.radiusLength,0,-x/this.radiusLength]).normalize(this.options.forceStrength));
        }
    };

    NElementsRotateItem.prototype.getVelocityMagnitude = function(v){
        return Math.sqrt(Math.pow(v.x,2)+Math.pow(v.y,2)+Math.pow(v.z,2))
    };

    module.exports = NElementsRotateItem;

});

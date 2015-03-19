define(function(require, exports, module) {

    var View = require('famous/core/View');
    var Node = require('famous/core/RenderNode');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Easing = require("famous/transitions/Easing");
    var Timer = require("famous/utilities/Timer");
    var Transitionable = require('famous/transitions/Transitionable');
    var SnapTransition = require("famous/transitions/SnapTransition");
    Transitionable.registerMethod('snap', SnapTransition);
    var SpringTransition = require("famous/transitions/SpringTransition");
    Transitionable.registerMethod('spring', SnapTransition);

    var SoundPlayer = require('widget/SoundPlayer/SoundPlayer');

    var ShakingItemView = require('widget/ShakingItemView');
    var JumpUpSurfaceItem = require('widget/JumpUpSurface/JumpUpSurfaceItem');
    var SvgTemplates = require('app/SvgTemplates');
    var Constant = require('app/Constant');

    function WishView(options){

        this.wisher = options.model;
        View.apply(this,arguments);
        _init.call(this);
    }

    function _init(){
        this.setWishSurface();
        this.setFloatingItems();
        _setSoundPlayer.call(this);
    }

    WishView.prototype = Object.create(View.prototype);
    WishView.prototype.constructor = WishView;

    WishView.prototype.setWishSurface = function(){
        var shadowColor = 'rgb(134, 255, 237)';
        this.wishNode = new Node();
        this.wishSurface = new Surface({
            size: [window.innerHeight/3, window.innerHeight/3],
            content: ['<div class="wish-surface">',
                '<textarea id="wish-area" class="wish-surface" placeholder="Wishes Time!" style="height: '+ window.innerHeight/5 +'px; font-size: '+window.innerHeight/30+'px"></textarea>',
//                '<div id="wish-area" class="wish-surface" placeholder="Wishes Time!" style="height: '+ window.innerHeight/5 +'px; font-size: '+window.innerHeight/41+'px">You are not alone ga. We are nearby and supporting you all the time. Your dream will come true. Do not give up and have a wonderful tomorrow.</div>',
                '</div>'].join(''),
            properties:{
                background: 'rgba(0, 236, 255, 0.7)',
                borderRadius: '20px',
                boxShadow: '3px -3px 10px '+shadowColor+', 3px 3px 10px '+shadowColor+', -3px -3px 10px '+shadowColor+', -3px 3px 10px '+shadowColor
            }
        });
        //this.setWishSurfaceContent(this.wisher.get('wish'));
        var transitionable = new Transitionable(0);
        this.wishSurfaceSpin = new  Modifier({
            transform: function(){
                return Transform.rotateY(Math.PI*(1-transitionable.get()))
            }
        });
        this.wishSurfaceMod = new Modifier({
            origin: [0.5, 0.5],
            align: [0.5, 0.5],
            transform: Transform.translate(0,window.innerHeight/7,0)
        });
        this.wishSurfaceAnimate = new Modifier({
            opacity:function(){
                return transitionable.get();
            }
        });

        this.add(this.wishSurfaceAnimate).add(this.wishSurfaceMod).add(this.wishSurfaceSpin).add(this.wishNode);
        this.wishNode.add(this.wishSurface);

        this.cancelButton = new Surface({
            size: [window.innerHeight/10, window.innerHeight/20],
            content: '<div class="cancel-button button" style="line-height: '+window.innerHeight/20+'px">Cancel</div>',
            properties:{
                background: 'rgba(240, 178, 175, 0.7)',
                borderRadius: '10px'
            }
        });
        this.cancelButtonMod = new Modifier({
            transform: Transform.translate(-window.innerHeight/9.5,window.innerHeight/8,15)
        });
        this.wishNode.add(this.cancelButtonMod).add(this.cancelButton);

        this.summitButton = new Surface({
            size: [window.innerHeight/5.4, window.innerHeight/20],
            content: '<div class="summit-button button" style="line-height: '+window.innerHeight/20+'px">Make Wishes</div>',
            properties:{
                background: 'rgba(196, 255, 131, 0.7)',
                borderRadius: '10px'
            }
        });
        this.summitButtonMod = new Modifier({
            transform: Transform.translate(window.innerHeight/16,window.innerHeight/8,15)
        });
        this.wishNode.add(this.summitButtonMod).add(this.summitButton);

        var transition = {
            //method: "spring",
            period: 2000,
            dampingRatio: .3,
            velocity: 0,
            curve: Easing['inOutQuad']
        };

        this._eventInput.on('scatter', function(){
            transitionable.set(0, transition)
        }.bind(this));

        this._eventInput.on('focus', function(){
            transitionable.set(1, transition);
            this.tempContent = _.clone(document.getElementById('wish-area').value);
            if (this.wisher && this.wisher.get('wish')){
                this.setWishSurfaceContent(this.wisher.get('wish'));
            }
            Timer.setTimeout(function(){
                document.getElementById('wish-area').focus();
            }.bind(this),1000)
        }.bind(this));

        this.cancelButton.on('click', function(){
            this._eventInput.emit('scatter');
            Timer.setTimeout(function(){
                this.setWishSurfaceContent(this.tempContent);
            }.bind(this),1000);
            this.sound.playSound(1,1);
        }.bind(this));

        this.summitButton.on('click', function(){
            this.wisher.set('wish', document.getElementById('wish-area').value);
            this._eventInput.emit('scatter');
            this.sound.playSound(0,1)
        }.bind(this))
    };

    WishView.prototype.setWishSurfaceContent = function(content) {
        if (document.getElementById('wish-area')) {
            document.getElementById('wish-area').value = content;
        }
    };

    WishView.prototype.setFloatingItems = function() {
        this.num = 8;
        this.initialTime = Date.now();
        this.floatItemsNode = new Node();
        this.floatItemsNodeMod = new Modifier({
            origin: [0.5, 0.5],
            align: [0.5, 0.5],
            transform : function () {
                return Transform.thenMove(Transform.rotateZ(.001 * (Date.now() - this.initialTime)), [0, window.innerHeight/7, 0]);
            }.bind(this)
        });
        this.shakingMod = new Modifier({
            transform: function(){
                return Transform.rotateZ(0.04* Math.sin((Date.now() - this.initialTime)/200));
            }.bind(this)
        });
        this.add(this.floatItemsNodeMod).add(this.shakingMod).add(this.floatItemsNode);
        for (var i= 0; i < this.num; i++){
            this.addFloatingItem(i);
        }
    };

    WishView.prototype.addFloatingItem = function(index) {
        var color= 'hsl(' +index*360/this.num + ',100%,85%)';
        var floatingItem = new Surface({
            size: [window.innerHeight/7, window.innerHeight/7],
            content: '<div>'+SvgTemplates[_.keys(SvgTemplates)[index]]([window.innerHeight/7, window.innerHeight/7], color)+'</div>'
        });
        var transitionable = new Transitionable(0);
        transitionable.set(Math.max(window.innerWidth, window.innerHeight));
        var floatingItemMod0 = new Modifier({
            transform: function(){
                return Transform.rotateZ(-.001 * (Date.now() - this.initialTime)-index*2*Math.PI/this.num);
            }.bind(this)
        });
        var floatingItemMod = new Modifier({
            transform: function(){
                return Transform.moveThen([transitionable.get(), 0, 0], Transform.rotateZ(index*2*Math.PI/this.num))
            }.bind(this)
        });
        this.floatItemsNode.add(floatingItemMod).add(floatingItemMod0).add(floatingItem);
        var transition = {
            method: "snap",
            period: 1000,
            dampingRatio: .3,
            velocity: 0
        };

        this._eventInput.on('scatter', function(){
            transitionable.set(Math.max(window.innerWidth,window.innerHeight), transition)
        }.bind(this));

        this._eventInput.on('focus', function(){
            transitionable.set(window.innerHeight/3.5, transition)
        }.bind(this))
    };

    function _setSoundPlayer(){
        var soundsName = ['4do', '1so'];
        var sounds = [];
        for (var i = 0; i < soundsName.length; i++){
            sounds.push([
                '/assets/Sound/',soundsName[i],'.wav'
            ].join(''))
        }
        this.sound = new SoundPlayer(sounds);
    }

    module.exports = WishView;

});

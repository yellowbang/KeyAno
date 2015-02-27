define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Vector = require('famous/math/Vector');
    var Timer = require("famous/utilities/Timer");

    var SoundPlayer = require('widget/SoundPlayer/SoundPlayer');

    var JumpUpSurface = require('widget/JumpUpSurface/JumpUpSurface');
    var NElementsRotate = require('widget/NElementsRotate/NElementsRotate');
    var WishView = require('widget/WishView');
    var TipsView = require('widget/TipsView');
    var DemoView = require('widget/DemoView');

    var Constant = require('app/Constant');

    var Lyrics = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var WishesCollection = require('app/models/WishersCollection');
    var FirebaseURL = "https://flickering-fire-5114.firebaseio.com/christy/";

    function KeyAno(){

        window.KeyAno = this;
        View.call(this);
        this.surf = new View();
        this.makingWishes = false;
        _setupFirebase.call(this);
    }

    KeyAno.prototype = Object.create(View.prototype);
    KeyAno.prototype.constructor = KeyAno;

    KeyAno.DEFAULT_OPTIONS={
        surfacesNetImage : "../assets/img/feather.jpg",
        surfacesNetImageSize : [1024,768]
    };

    function _setupFirebase(){
        this.wishesCollection = new WishesCollection([], {
            firebase: FirebaseURL
        });

        function generateUserId() {
            var userId = localStorage.getItem('user-id');
            if (!userId) {
                userId = Date.now();
                localStorage.setItem('user-id', userId);
            }
            return userId;
        }

        function loadId(){
            this.wisher = this.wishesCollection.where({id: userId})[0];
            if (!this.wisher) {
                this.wishesCollection.create({
                    id: userId
                });
                this.wisher = this.wishesCollection.where({id: userId})[0];
            }

            Timer.setTimeout(function(){
                _setupLayout.call(this);
                _setupContent.call(this);
                _setSoundPlayer.call(this);
                _setWishView.call(this);
                _setupEvents.call(this);
                Timer.setTimeout(function(){
                    _autoPlay.call(this);
                }.bind(this), 3100);
            }.bind(this),500);
        }

        var userId = generateUserId();
        Timer.setTimeout(function(){
            loadId.call(this)
        }.bind(this), 1000)
    }

    function _setupLayout(){
        this.layout = new HeaderFooterLayout({
            headerSize: Constant.HeaderSize,
            footerSize: Constant.FooterSize
        });
        this.add(this.layout);
    }

    function _setupContent(){
        this.jumpUpSurface = new JumpUpSurface();
        this.layout.content.add(this.jumpUpSurface);

        this.nElementRotate = new NElementsRotate();
        this.nElementRotateMod = new Modifier({
            transform:Transform.rotateX(-0.2)
        });
        this.layout.content.add(this.nElementRotateMod).add(this.nElementRotate);
        this._eventOutput.pipe(this.nElementRotate);

        this.tipsView = new TipsView();
        this.add(this.tipsView);
        this._eventOutput.pipe(this.tipsView);

        //this.demoView = new DemoView();
        //this.add(this.demoView);
    }

    function _setSoundPlayer(){
        var soundsName = ['0do','0re','0me','0fa','0so','0la','0xi','1do','1re','1me','1fa','1so','1la','1xi','2do','2re','2me','2fa','2so','2la','2xi','3do','3re','3me','3fa','3so','3la','3xi','4do','4re','4me','4fa','4so','4la','4xi','5do'];
        var sounds = [];
        for (var i = 0; i < soundsName.length; i++){
            sounds.push([
//                '/assets/Sound/',soundsName[i],'.wav'
                '/assets/Sound/',soundsName[i],'.wav'
            ].join(''))
        }
        sounds.push('/assets/Sound/canon.mp3');
        this.sound = new SoundPlayer(sounds);
    }

    function _setupEvents(){
        this.time = 0;
        this.lastIndex = -2;
        Engine.on('keypress', function(e){
            if (this.makingWishes) return;
            if (e.keyCode==32){
                this.setMakeWishesMode();
                return
            }
            this.onKeyPress(e.keyCode);
        }.bind(this));

        var setChanging = _.debounce(function(){
            this._eventInput.emit('setChanging');
        }.bind(this),5000);
        Engine.on('keyup',function(){
            this.lastIndex = -2;
            setChanging();
        }.bind(this));

        this.wishView._eventInput.on('scatter', function(){
            this.playingMode();
        }.bind(this))
    }

    function _setWishView(){
        this.wishView = new WishView({model: this.wisher});
        this.add(this.wishView);
        this._eventOutput.pipe(this.wishView)
    }

    function _autoPlay(){
        this.playingIndex = 0;
        this.playing(Constant.autoPlay[this.playingIndex][0], Constant.autoPlay[this.playingIndex][1])
    }

    KeyAno.prototype.playing = function(keyCode, time) {
        this.onKeyPress(keyCode);
        this._eventOutput.emit('rorate');
        this.playingIndex++;
        if (Constant.autoPlay[this.playingIndex]){
            Timer.setTimeout(function(){
                this.playing(Constant.autoPlay[this.playingIndex][0],Constant.autoPlay[this.playingIndex][1]||800);
            }.bind(this), time)
        } else {
            Timer.setTimeout(function(){
                this.sound.playSound(36, 1);
                this.setMakeWishesMode();
            }.bind(this), 4000)
        }
    };

    KeyAno.prototype.onKeyPress = function(keyCode){
        if (this.tipsView.isShowing) this._eventInput.emit('setFading');
        var index = this.keyCodeToIndex(keyCode);
        if (index == -1) return;
        this.jumpUpSurface.addItem();
        this.sound.playSound(index, 1);
        this.lastIndex = index;
    };

    KeyAno.prototype.setMakeWishesMode = function(){
        this.makingWishes = true;
        this._eventOutput.emit('focus');
    };

    KeyAno.prototype.playingMode = function(){
        this.makingWishes = false;
    };

    KeyAno.prototype.keyCodeToIndex = function(code){
        var index;
        if (code == 48) {
            index = 9;
        } else if (code >= 49 && code <= 57){
            index = code - 49;
        } else {
            var char = String.fromCharCode(code).toLowerCase();
            index = 9;
            switch (char){
                case "m": index++;
                case "n": index++;
                case "b": index++;
                case "v": index++;
                case "c": index++;
                case "x": index++;
                case "z": index++;
                case "l": index++;
                case "k": index++;
                case "j": index++;
                case "h": index++;
                case "g": index++;
                case "f": index++;
                case "d": index++;
                case "s": index++;
                case "a": index++;
                case "p": index++;
                case "o": index++;
                case "i": index++;
                case "u": index++;
                case "y": index++;
                case "t": index++;
                case "r": index++;
                case "e": index++;
                case "w": index++;
                case "q": index++;
                    break;
                default: index = -1;
            }
        }
        return index;
    };

    module.exports = KeyAno;

});
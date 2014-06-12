define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');

    var SoundPlayer = require('widget/SoundPlayer/SoundPlayer');

//    var Ring3D = require('widget/ring3D/Ring3D');
//    var SurfacesNet = require('widget/surfacesNet/SurfacesNet');
    var JumpUpSurface = require('widget/JumpUpSurface/JumpUpSurface');
    var NElementsRotate = require('widget/NElementsRotate/NElementsRotate');

    var Constant = require('app/Constant');

    var Lyrics = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//    var Lyrics = ['多','谢','你','啦','林','颖','薯','high','hand'];

    function KeyAno(){

        window.KeyAno = this;
        View.call(this);
        this.surf = new View();
        this.currIndex = 0;
//        _setupBackground.call(this);
        _setupLayout.call(this);
//        _setupHeader.call(this);
        _setupContent.call(this);
        _setupEvents.call(this);
        _setSoundPlayer.call(this);
    }

    KeyAno.prototype = Object.create(View.prototype);
    KeyAno.prototype.constructor = KeyAno;

    KeyAno.DEFAULT_OPTIONS={
        surfacesNetImage : "../assets/img/feather.jpg",
        surfacesNetImageSize : [1024,768]
    };

    function _setupBackground(){
        this.backgroundSurf = new Surface({
            size:[undefined,undefined],
            content:'<div class="app-background"></div>'
        });
        this.add(this.backgroundSurf);
    }
    function _setupLayout(){
        this.layout = new HeaderFooterLayout({
            headerSize: Constant.HeaderSize,
            footerSize: Constant.FooterSize
        });
        this.add(this.layout);
    }

    function _setupContent(){
//        this.ring3D = new Ring3D({Content: 'Hello',
//            Size : [50,100],
//            Period : 8000,
//            StringPosition: [window.innerWidth*0.5,window.innerHeight*0.1,0],
//            Position : [window.innerWidth*0.1, window.innerHeight*0.1, 0],
//            Velocity : [0,0.3,1]
//        });
//        this.layout.content.add(this.ring3D);

//        this.surfacesNet = new SurfacesNet({
//            Dimension : Constant.SurfacesNetDimension,
//            ImageURL : this.options.surfacesNetImage,
//            ImageOriginalSize : this.options.surfacesNetImageSize,
//            ItemSpacing : Constant.SurfacesNetSpacing
//        });
//        this.layout.content.add(this.surfacesNet);

        this.jumpUpSurface = new JumpUpSurface();
        this.layout.content.add(this.jumpUpSurface);

        this.nElementRotate = new NElementsRotate();
        this.nElementRotateMod = new Modifier({
            transform:Transform.rotateX(-0.2)
        });
        this.layout.content.add(this.nElementRotateMod).add(this.nElementRotate);
    }

    function _setSoundPlayer(){
        var soundsName = ['0do','0re','0me','0fa','0so','0la','0xi','1do','1re','1me','1fa','1so','1la','1xi','2do','2re','2me','2fa','2so','2la','2xi','3do','3re','3me','3fa','3so','3la','3xi','4do','4re','4me','4fa','4so','4la','4xi','5do'];
        var sounds = [];
        for (var i = 0; i < soundsName.length; i++){
            sounds.push([
                '/assets/sound/',soundsName[i],'.wav'
            ].join(''))
        }
        this.sound = new SoundPlayer(sounds);
    }

    function _setupEvents(){
        this.time = 0;
        var lastIndex = -2;
        Engine.on('keypress', function(e){
            var index = this.keyCodeToIndex(e.keyCode);
            if (index == -1 || lastIndex == index) return;
            this.jumpUpSurface.addItem();
            this.sound.playSound(index, 1);
            lastIndex = index;
        }.bind(this));
        Engine.on('keyup',function(e){
            lastIndex = -2;
        }.bind(this))
    }

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
define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');

    var HeaderView = require('app/HeaderView');
    var Ring3D = require('widget/ring3D/Ring3D');
    var SurfacesNet = require('widget/surfacesNet/SurfacesNet');
    var JumpUpSurface = require('widget/JumpUpSurface/JumpUpSurface');

    var Constant = require('app/Constant');

    var Lyrics = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var Lyrics = ['多','谢','你','啦','林','颖','薯','high','hand'];

    function KeyAno(){

        window.KeyAno = this;
        View.call(this);
        this.surf = new View();
        this.currIndex = 0;
//        _setupBackground.call(this);
        _setupLayout.call(this);
        _setupHeader.call(this);
        _setupContent.call(this);
        _setupEvents.call(this);
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
    function _setupHeader(){
        this.headerView = new HeaderView();
        this.layout.header.add(this.headerView);
    }

    function _setupContent(){
        this.ring3D = new Ring3D({Content: 'Hello',
            Size : [50,100],
            Period : 8000,
            StringPosition: [window.innerWidth*0.5,window.innerHeight*0.1,0],
            Position : [window.innerWidth*0.1, window.innerHeight*0.1, 0],
            Velocity : [0,0.3,1]
        });
        this.layout.content.add(this.ring3D);

//        this.surfacesNet = new SurfacesNet({
//            Dimension : Constant.SurfacesNetDimension,
//            ImageURL : this.options.surfacesNetImage,
//            ImageOriginalSize : this.options.surfacesNetImageSize,
//            ItemSpacing : Constant.SurfacesNetSpacing
//        });
        this.layout.content.add(this.surfacesNet);
        this.jumpUpSurface = new JumpUpSurface();
        this.layout.content.add(this.jumpUpSurface);
    }

    function _setupEvents(){
        Engine.on('keypress',function(){
            this.jumpUpSurface.addItem({content: Lyrics[this.currIndex%Lyrics.length]});
            this.currIndex++;
        }.bind(this));
    }

    module.exports = KeyAno;

});
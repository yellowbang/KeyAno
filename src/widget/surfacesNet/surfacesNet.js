define(function(require, exports, module) {
    // import dependencies
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var PhysicsEngine = require('famous/physics/PhysicsEngine');
    var Spring = require('famous/physics/forces/Spring');
    var Vector = require('famous/math/Vector');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');

    var SurfacesNetItem = require('widget/surfacesNet/Item');

    var Constant = require('app/Constant');

    function SurfacesNet(options) {

        View.apply(this, arguments);

        this.physicsEngine = new PhysicsEngine();

        _getItemSize.call(this);
        _setupItems.call(this);
    }

    SurfacesNet.prototype = Object.create(View.prototype);
    SurfacesNet.prototype.constructor = SurfacesNet;

    SurfacesNet.DEFAULT_OPTIONS = {
        Dimension : [9,9],
        ImageURL : "src/test/surfacesNet/assets/feather.jpg",
        ImageOriginalSize : [1024, 768],
        ItemSpacing : 10
    };

    function _getItemSize(){
        this.setImageSize();
        this.itemSize = [(this.imageSize[0] - (this.options.Dimension[0] - 1) * this.options.ItemSpacing)/this.options.Dimension[0], (this.imageSize[1]-(this.options.Dimension[1] - 1) * this.options.ItemSpacing)/this.options.Dimension[1]];
        this.itemSpacing = [this.itemSize[0] + this.options.ItemSpacing, this.itemSize[1] + this.options.ItemSpacing];
        this.container = new ContainerSurface({
            size: this.imageSize
        });
        this.containerMod = new Modifier({
            origin:[0.5,0]
        });
        this.add(this.containerMod).add(this.container);
    }

    function _setupItems(){
        for (var i = 0; i < this.options.Dimension[0]; i++){
            for (var j = 0; j < this.options.Dimension[1]; j++){
                this['item'+i+'_'+j] = this.addItem([j*this.itemSpacing[0], i*this.itemSpacing[1]]);
                if (j > 0){
                    Constant.ItemSpringSetting.length = this.itemSpacing[0];
                    this.setSpringBtwItmes(this['item'+ i + '_' + (j-1)].particle, this['item' + i + '_' + j].particle);
                }
                if (i > 0){
                    Constant.ItemSpringSetting.length = this.itemSpacing[1];
                    this.setSpringBtwItmes(this['item'+ (i-1) + '_' + j].particle, this['item' + i + '_' + j].particle);
                }
            }
        }
    }

    SurfacesNet.prototype.addItem = function(pos){
        var item = new SurfacesNetItem({
            physicsEngine: this.physicsEngine,
            pos: pos,
            size: this.itemSize,
            imageURL: this.options.ImageURL,
            imageSize: this.imageSize
        });
        this.container.add(item);
        var anchor = new Vector(pos[0], pos[1], 0);
        this.setSpringToWall(item.particle, anchor);
        return item;
    };

    SurfacesNet.prototype.setSpringToWall = function(target, anchor){
        Constant.WallSpringSetting.anchor = anchor;
        var wallSpring = new Spring(Constant.WallSpringSetting);
        this.physicsEngine.attach(wallSpring, target);

    };
    SurfacesNet.prototype.setSpringBtwItmes = function(target, sources){
        var itemSpring = new Spring(Constant.ItemSpringSetting);
        this.physicsEngine.attach(itemSpring, target, sources);
    };

    SurfacesNet.prototype.setImageSize = function(){
        var ratio = Math.min((window.innerWidth - Constant.SurfacesNetPaddingLeft - Constant.SurfacesNetPaddingRight)/this.options.ImageOriginalSize[0],
                            (window.innerHeight - Constant.HeaderSize - Constant.FooterSize)/this.options.ImageOriginalSize[1]);
        this.imageSize = [this.options.ImageOriginalSize[0]*ratio, this.options.ImageOriginalSize[1]*ratio]
    };

    module.exports = SurfacesNet;


});

define(function(require, exports, module) {

    var Spring = require('famous/physics/forces/Spring');
    var FourBit = 600;

    module.exports = {

        ItemSpringSetting : {
            dampingRatio : 0.6,
            forceFunction: Spring.FORCE_FUNCTIONS.FENE,
            period: 900
        },

        WallSpringSetting : {
            dampingRatio : 0.1,
            forceFunction: Spring.FORCE_FUNCTIONS.HOOK,
            length: 0,
            period: 2000
        },

        HeaderSize:0,
        FooterSize:0,

        Title: ['生','日','快','樂','Mer','ry','Chris','ty'],
        autoPlay:[
            //ttytiu ttytoi ttspiiuy aapioi
            [84, FourBit/2],
            [84, FourBit/2],
            [89, FourBit],
            [84, FourBit],
            [73, FourBit],
            [85, FourBit*2],
            [84, FourBit/2],
            [84, FourBit/2],
            [89, FourBit],
            [84, FourBit],
            [79, FourBit],
            [73, FourBit*2],
            [84, FourBit/2],
            [84, FourBit/2],
            [83, FourBit],
            [80, FourBit],
            [73, FourBit],
            [85, FourBit],
            [89, FourBit],
            [65, FourBit/2],
            [65, FourBit/2],
            [80, FourBit],
            [73, FourBit],
            [79, FourBit],
            [73, FourBit*7],
            //tiioiuyr yoopoiut uppapoiy ttyoui
            [84, FourBit],
            [73, FourBit],
            [73, FourBit/2],
            [79, FourBit/2],
            [73, FourBit/2],
            [85, FourBit/2],
            [89, FourBit],
            [82, FourBit],
            [89, FourBit],
            [79, FourBit],
            [79, FourBit/2],
            [80, FourBit/2],
            [79, FourBit/2],
            [73, FourBit/2],
            [85, FourBit],
            [84, FourBit],
            [85, FourBit],
            [80, FourBit],
            [80, FourBit/2],
            [65, FourBit/2],
            [80, FourBit/2],
            [79, FourBit/2],
            [73, FourBit],
            [89, FourBit],
            [84, FourBit/2],
            [84, FourBit/2],
            [89, FourBit],
            [79, FourBit],
            [85, FourBit],
            [73, FourBit*2]
        ],
        //Title: ['Play','a','song','and','have','fun', '!'],

        SurfacesNetDimension: [9,9],
        SurfacesNetSpacing: 4,//window.innerWidth*0.01,
        SurfacesNetPaddingLeft: 100,
        SurfacesNetPaddingRight: 100

    }

});
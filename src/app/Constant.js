define(function(require, exports, module) {

    var Spring = require('famous/physics/forces/Spring');

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

//        Title: ['生','日','快','樂','Hap','py','Birth','day'],
        Title: 'adfsdfdsfdsfs',

        SurfacesNetDimension: [9,9],
        SurfacesNetSpacing: 4,//window.innerWidth*0.01,
        SurfacesNetPaddingLeft: 100,
        SurfacesNetPaddingRight: 100

    }

});
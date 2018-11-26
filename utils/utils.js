
const utils = {
    px2rem: function(domPX) {
        // domPX: 100px
        var psdWidth = window.screen.width;
        
        var htmlFontSize = getComputedStyle(window.document.documentElement)['font-size'];
        if (htmlFontSize) {
            htmlFontSize = htmlFontSize.split("px")[0]
        }
        var size = parseInt(domPX.split("px")[0]);
        var rem = size / (htmlFontSize * 2);
        return rem + "rem";
    }
};

module.exports = utils;
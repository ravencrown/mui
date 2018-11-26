/**
 * @param {string} selector header 挂点
 * @param {boolean} closeIconShow 是否显示关闭按钮
 * @param {boolean} backIconShow 是否显示返回按钮
 * @param {string} titleName 标题
 * @param {object} css cssTest 样式
 * 
 */
import utils from '../utils/utils';
import headerTemplate from './header.art';

class header {
    constructor(selector, options = {}) {
        
        this.headerInfo = {
            selector: selector,
            closeIconShow: false,
            closeIconId: "",
            closeFn: null,
            backIconShow: false,
            backIconId: "",
            gobackFn: null,
            titleName: "header-title",
            selector: selector
        };

        Object.assign(this.headerInfo, options);
        this.$container = $(selector);
        this.init(this.headerInfo);
    }

    init(headerInfo) {
        this.renderHtml(headerInfo);
        this.renderCSS(headerInfo);
        this.bindEvent(headerInfo)
    }

    // 事件绑定
    bindEvent(headerInfo) {
        let self = this;
        let $backIcon = self.$container.find(".ui-back-icon");
        if (headerInfo.closeFn) {
            $backIcon.on("click", headerInfo.closeFn);
        }
    }

    // 渲染html结构
    renderHtml(headerInfo) {
        if (this.$container.length > 0) {
            this.$container[0].innerHTML = headerTemplate(headerInfo);
        }
    }
    
    // css初始化：可选
    renderCSS(headerInfo) {
        var $header = $(headerInfo.selector + " .ui-header");
        if (headerInfo.css) {
            $header.css(headerInfo.css);
        }
    }

    // 返回按钮隐藏
    hideBackIcon() {
        var self = this;
        self.$container.find(".ui-back-icon").hide();
        self.$container.find(".ui-title").addClass("padding-left");
    }

    // 返回按钮显示
    showBackIcon() {
        var self = this;
        self.$container.find(".ui-back-icon").show();
        self.$container.find(".ui-title").removeClass("padding-left");
    }
    
}

export default header;
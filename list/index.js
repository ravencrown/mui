/**
 * @param {string} selector 挂点元素 选择器
 * @param {array} data 数据
 * @param {function} onChange 回调
 * @param {object} css 可选自定义样式
 */
import runtime from 'art-template/lib/runtime';
import listTemplate from './list.art';

class list {
    constructor(selector, options = {}) {
        
        // list default info
        this.listInfo = {
            listType: "normal",
            listData: [],
            selector: selector,
            css: "",
            defaultId: ""
        };
        Object.assign(this.listInfo, options);
        this.$container = $(selector);
        this.renderHtml(this.listInfo);
        this.renderCSS(this.listInfo);
        this.bindEvent(this.listInfo);
    }

    bindEvent(listInfo) {
        let listItem = $(listInfo.selector + " .ui-list-item");
        listItem.on("click", function() {
            if(!$(this).hasClass('active')){
                $(this).parent().find(".active").removeClass("active");
                $(this).addClass("active");
                
            }
            if (listInfo.onChange) {
                listInfo.onChange.call(this, $(this).index());    
            }
        });
    }
     
    // 渲染html结构
    renderHtml(listInfo) {
        var _ = this;

        runtime.normal = function(listItem) {
            return ``;
        }

        if (this.$container.length > 0) {
            this.$container[0].innerHTML = listTemplate(listInfo);
        }
    }

    // css样式初始化：可选
    renderCSS(listInfo) {
        let $ul = $(listInfo.selector + " .ui-list");
        if (listInfo.css) {
            $ul.css(listInfo.css);
        }
    }
};

export default list;

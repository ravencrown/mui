/**
 * @param {string} tabItems
 * @param {string} tabContents tab 对应的 content
 * @param {string} position 前添加还是后添加
 */
import tabTemplate from './tab.art';
class tab {
    constructor(selector, options = {}) {
        
        this.tabInfo = {
            id: "tabId",
            tabName: "tab-navbar",
            selector: selector
        }

        Object.assign(this.tabInfo, options);
        this.$container = $(selector);
        this.addTabItem(this.tabInfo);
        this.bindEvent(this.tabInfo);
    }

    bindEvent(tabInfo) {
        if (tabInfo.className) {
            let $tabItems = $(tabInfo.selector + " ." + tabInfo.className);
            if ($tabItems) {
                $tabItems.on("click", function() {
                    if (tabInfo.onChange) {
                        tabInfo.onChange.call(this);
                    }
                });
            }
        }
    }

    // 添加一个Tab
    addTabItem(tabInfo) {
        if (this.$container.length > 0) {
            if (tabInfo.position == "before") {
                this.$container.prepend(tabTemplate(tabInfo));
            } else if (tabInfo.position == "after") {
                this.$container.append(tabTemplate(tabInfo));
            } else {
                this.$container.append(tabTemplate(tabInfo));
            }
            
        }
    }

    // 删除一个Tab
    deleteTabItem() {

    }
};

export default tab;
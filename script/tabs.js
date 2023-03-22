class Tabs {
    static CLASS_BTN_ACTIVE = "btn-active"
    static CLASS_TAB_CONTENT = "tab-content"
    static CLASS_TAB_CONTENT_HIDDEN = "tab-content-hidden"
    static FIRST_ITEM = 0;
    constructor(tabs) {
        this.tabsElement = document.querySelector("#tabs");
        this.tabButtons = this.tabsElement.querySelectorAll("button");
        this.tabContents = this.tabsElement.querySelectorAll(".tab-content");

        



        this.tabButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                this.displayContent(index);
            });
        });

        this.displayContent(Tabs.FIRST_ITEM);

        this.tabContents.forEach(content => content.classList.add(Tabs.CLASS_TAB_CONTENT_HIDDEN));
       

    }

    displayContent(index) {
        this.tabContents.forEach(content => content.classList.remove(Tabs.CLASS_TAB_CONTENT));
        this.tabContents[index].classList.add(Tabs.CLASS_TAB_CONTENT);
        this.tabButtons.forEach(button => button.classList.remove(Tabs.CLASS_BTN_ACTIVE));
        this.tabButtons[index].classList.add(Tabs.CLASS_BTN_ACTIVE);
    }

}
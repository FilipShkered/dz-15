class Tabs {
    static CLASS_NAV_ITEM = "nav-item"
    static CLASS_NAV_ITEM_ACTIVE = "nav-item-active"
    static CLASS_CONTENT_ITEM = "content-item"
    static CLASS_CONTENT_ITEM_ACTIVE = "content-item-active"
    static ACTIVE_TAB = 0

    constructor(tabsRoot) {
        const [navElem, contentElem] = tabsRoot.children

        this.tabsRoot = tabsRoot
        this.navElem = Array.from(navElem.children)
        this.contentElem = Array.from(contentElem.children)
        this.bindStyles()
        this.bindEvents()
        this.setTabContents(Tabs.ACTIVE_TAB)
    }

    bindStyles() {
        this.navElem.forEach((navElem) => {
            navElem.classList.add(Tabs.CLASS_NAV_ITEM);
        })

        this.contentElem.forEach((contentElem) => {
            contentElem.classList.add(Tabs.CLASS_CONTENT_ITEM);
        })
    }

    bindEvents() {
        this.tabsRoot.addEventListener('click', this.onTabsRootClick.bind(this))
    }

    onTabsRootClick(e) {
        const target = e.target

        if (this.isNavBtn(target)) {
            const index = this.findNavIndex(target)


            this.hideTabContents()
            this.setTabContents(index)
        }

    }

    isNavBtn(el) {
        return el.classList.contains(Tabs.CLASS_NAV_ITEM)
    }

    findNavIndex(navEl) {
        return this.navElem.indexOf(navEl)
    }

    hideTabContents() {
        this.navElem[Tabs.ACTIVE_TAB].classList.remove(Tabs.CLASS_NAV_ITEM_ACTIVE)
        this.contentElem[Tabs.ACTIVE_TAB].classList.remove(Tabs.CLASS_CONTENT_ITEM_ACTIVE)
    }

    setTabContents(index) {
        Tabs.ACTIVE_TAB = index
        this.navElem[index].classList.add(Tabs.CLASS_NAV_ITEM_ACTIVE)
        this.contentElem[index].classList.add(Tabs.CLASS_CONTENT_ITEM_ACTIVE)
    }
}
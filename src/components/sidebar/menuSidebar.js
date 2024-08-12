class MenuSideBar extends HTMLElement{
    static get observedAttributes() {
        return ['name', 'icon', 'path'];
    }

    constructor(){
        super()
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render(){
        const name = this.getAttribute('name') ?? ''
        const icon = this.getAttribute('icon') ?? ''
        const path = this.getAttribute('path') ?? '#'

        this.innerHTML = `
            <a href="${path}"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-secondary-light-hover hover:text-white focus:bg-secondary-light-hover focus:bg-opacity-80 focus:text-white active:bg-blue-gray-50 active:bg-opacity-80 active:white">
                <div class="grid mr-4 place-items-center">
                    <i class="${icon}"></i>
                </div>
                ${name}
            </a>
        `
    }
}

customElements.define('menu-sidebar', MenuSideBar);
class CardInfo extends HTMLElement{
    static get observedAttributes() {
        return [
            'name', 
            'icon', 
            'value', 
            'marginTop',
            'background',
        ];
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
        const value = this.getAttribute('value') ?? '0'
        const marginTop = this.getAttribute('marginTop') ?? ''
        const background = this.getAttribute('background') ?? ''

        this.innerHTML = `
            <li class="flex items-center rounded-full justify-between w-full p-3 ${background} ${marginTop}">
                <div class="flex items-center gap-2">
                    <div class="flex justify-center items-center h-9 w-9 rounded-full !bg-primary-purple-icon-dark">
                        <img src="${icon}" height="25" width="25" alt="food mbi" class="object-contain max-w-[25px]">
                    </div>
                    <p class="font-[axiforma-regular] text-xs text-black">${name}</p>
                </div>
                    <p class="font-[axiforma-regular] text-xs text-black">${value}</p>
            </li>
        `
    }
}

customElements.define('card-info', CardInfo);
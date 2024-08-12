class GraphicsCard extends HTMLElement{
    static get observedAttributes() {
        return [
            'title',
            'lists',
            'chart'
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
        const title = this.getAttribute('title') ?? ''
        const lists = this.getAttribute('lists') ?? ''
        const chart = this.getAttribute('chart') ?? ''

        this.innerHTML = `
        <div class="bg-white rounded-xl p-8">
                <h1 class="font-[axiforma-regular] text-black text-sm">${title}</h1>
                    <div class="flex justify-between w-full items-center">
                        <!-- CHART HERE -->
                    <div class="w-[50%] flex justify-center">
                        ${chart}
                    </div>
                    <!-- INFO HERE -->
                    <ul class="flex flex-col w-[40%]">
                        ${lists}
                    </ul>
                </div>
            </div>
        `
    }
}

customElements.define('graphics-card', GraphicsCard);
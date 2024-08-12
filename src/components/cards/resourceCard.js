class ResourceCard extends HTMLElement{
    static get observedAttributes() {
        return [
            'icon', 
            'isLinked', 
            'title',
            'total',
            'desc',
            'discount',
            'bgDiscount',
            'colorDiscount',
            'pdMainContent'
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
        const icon = this.getAttribute('icon')
        const isLinked = this.getAttribute('isLinked')
        const title = this.getAttribute('title')
        const total = this.getAttribute('total')
        const desc = this.getAttribute('desc')
        const discount = this.getAttribute('discount')
        const bgDiscount = this.getAttribute('bgDiscount')
        const colorDiscount = this.getAttribute('colorDiscount')
        const pdMainContent = this.getAttribute('pdMainContent')

        this.innerHTML = `
            <div class="relative flex flex-col text-gray-700 !bg-white bg-clip-border rounded-xl w-full gap-4">
                <div class="${pdMainContent ? pdMainContent : 'p-6'} flex flex-col">
                    ${icon ? 
                        `
                        <div class="flex items-center justify-between mb-8">
                        <div class="flex justify-center items-center h-10 w-10 rounded-full"
                            style="background-color: rgba(156, 148, 234, 0.2);">
                            <i class="${icon} !text-primary-purple-icon-dark"></i>
                        </div>
                        ${isLinked ? `
                            <button type="button"
                            class="border rounded-full h-11 w-11 flex justify-center items-center">
                            <i class="fa-solid fa-arrow-right-long !rotate-[-45deg] text-black"></i>
                        </button>
                            `: ''}
                    </div>
                        `
                        :
                        ''
                    }
                    
                    <div>
                        <h5
                        class="block mb-1 font-[axiforma-regular] text-sm antialiased leading-snug tracking-normal !text-neutral-default">
                            ${title}
                        </h5>
                        <h1 class="font-[axiforma-semibold] text-black text-3xl">${total}</h1>
                    </div>
                </div>
                <div class="p-6 pt-0 flex justify-between items-center gap-2">
                    <p
                    class="block font-[axiforma-regular] text-sm text-start antialiased font-light leading-relaxed text-inherit !text-primary-purple-icon">
                    ${desc}
                    </p>
                    ${discount ?
                        `<div class="flex items-center p-1 rounded-md ${bgDiscount}">
                            <p class="${colorDiscount} text-sm">${discount}</p>
                        </div>`:
                        ''
                    }
                </div>
            </div>
        `
    }
}

customElements.define('resource-card', ResourceCard);
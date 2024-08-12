class Tables extends HTMLElement {
    static get observedAttributes() {
        return [
            'thead',
        ];
    }
    constructor() {
        super()
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const thead = this.getAttribute('thead') ?? ''

        this.innerHTML = `
        <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white rounded-xl bg-clip-border">
        <table class="w-full text-left table-auto min-w-max">
            <thead>
                <tr id="title-row">
                    ${thead}
                </tr>
            </thead>
            <tbody id="table-body">
            </tbody>
        </table>
        </div>
        `
    }
}

customElements.define('table-container', Tables);
class Tables extends HTMLElement {
    static get observedAttributes() {
        return [];
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
        this.innerHTML = `
        <div class="flex w-full bg-white flex-col rounded-bl-xl rounded-br-xl">
            <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white rounded-tl-xl rounded-tr-xl bg-clip-border">
            <table class="w-full text-left table-auto min-w-max">
                <thead>
                    <tr id="title-row"></tr>
                </thead>
            <tbody id="table-body"></tbody>
            </table>
            </div>
            <div id="table-pagination" class="flex justify-center p-4"></div>
        </div>
        `
    }
}

customElements.define('table-container', Tables);
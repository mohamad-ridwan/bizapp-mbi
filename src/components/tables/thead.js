class Thead extends HTMLElement {
    static get observedAttributes() {
        return [
            'title'
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
        const head = [
            {
                title: 'Bil'
            },
            {
                title: 'Masa'
            },
            {
                title: 'Daerah'
            },
            {
                title: 'Kedai'
            },
            {
                title: 'RM'
            },
        ]

        const tr = document.getElementById('title-row')
        const headContent = head.map(item => `
            <th class="p-4 !bg-primary-purple-icon font-[axiforma-regular]">
                <p
                    class="block font-[axiforma-medium] text-sm antialiased font-normal leading-none text-white">
                    ${item.title}
                </p>
            </th>
            `).join('')
        tr.innerHTML = headContent

        this.innerHTML = ''
    }
}

customElements.define('th-table', Thead);
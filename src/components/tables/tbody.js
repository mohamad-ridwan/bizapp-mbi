class TBody extends HTMLElement {
    static get observedAttributes() {
        return [

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
        const body = [
            {
                masa: '17/6/2024 | 12:07',
                daerah: 'Petaling',
                kedai: 'Satay Sedap',
                rm: 'RM 40.00'
            },
            {
                masa: '21/6/2024 | 05:33',
                daerah: 'Sepang',
                kedai: 'Laksa D’Muar',
                rm: 'RM 17.90'
            },
            {
                masa: '02/7/2024 | 10:58',
                daerah: 'Sabak Bernam',
                kedai: 'Ayam Madu Tasik',
                rm: 'RM 25.35'
            },
            {
                masa: '03/7/2024 | 08:16',
                daerah: 'Gombak',
                kedai: 'Nasi Lemak 7 Langit',
                rm: 'RM 7.20'
            },
        ]
        const tbody = document.getElementById('table-body')
        const tbodyContent = body.map((item, i) => `
            <tr>
            <td class="p-4 border-b !border-neutral-stroke">
                    <p
                    class="block font-[axiforma-medium] text-xs antialiased font-normal leading-normal !text-neutral-table">
                    ${i + 1}.
                    </p>
                </td>
                <td class="p-4 border-b !border-neutral-stroke">
                    <p
                    class="block font-[axiforma-medium] text-xs antialiased font-normal leading-normal !text-neutral-table">
                    ${item.masa}
                    </p>
                </td>
                <td class="p-4 border-b !border-neutral-stroke">
                    <p
                    class="block font-[axiforma-medium] text-xs antialiased font-normal leading-normal !text-neutral-table">
                    ${item.daerah}
                    </p>
                </td>
                <td class="p-4 border-b !border-neutral-stroke">
                    <p
                    class="block font-[axiforma-medium] text-xs antialiased font-normal leading-normal !text-neutral-table">
                    ${item.kedai}
                    </p>
                </td>
                <td class="p-4 border-b !border-neutral-stroke">
                    <p
                    class="block font-[axiforma-medium] text-xs antialiased font-normal leading-normal !text-success-currency">
                    ${item.rm}
                    </p>
                </td>
            </tr>
        `).join('')
        tbody.innerHTML = tbodyContent

        this.innerHTML = ''
    }
}

customElements.define('table-body', TBody);
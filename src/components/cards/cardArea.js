class CardArea extends HTMLElement{
    static get observedAttributes() {
        return [
            'image',
            'title',
            'area'
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
        const image = this.getAttribute('image') ?? ''
        const title = this.getAttribute('title') ?? ''
        const area = this.getAttribute('area') ?? ''

        const cardArea = document.getElementById('card-area')

        const data = [
            {
                image: '../../../assets/images/area/area1.jpg',
                title: 'Sabak Bernam',
                area: 'Selangor, Malaysia'
            },
            {
                image: '../../../assets/images/area/area2.jpg',
                title: 'Kuala Selangor',
                area: 'Selangor, Malaysia'
            },
            {
                image: '../../../assets/images/area/area3.jpg',
                title: 'Hulu Selangor',
                area: 'Selangor, Malaysia'
            },
            {
                image: '../../../assets/images/area/area4.jpg',
                title: 'Gombak',
                area: 'Selangor, Malaysia'
            },
            {
                image: '../../../assets/images/area/area5.jpg',
                title: 'Petaling',
                area: 'Selangor, Malaysia'
            },
            {
                image: '../../../assets/images/area/area6.jpg',
                title: 'Klang',
                area: 'Selangor, Malaysia'
            },
        ]

        const card = data.map((item)=>`
        <li class="rounded-2xl flex flex-col bg-white group transition h-fit">
                <div class="rounded-tl-2xl rounded-tr-2xl overflow-hidden h-20 w-32 flex group-hover:w-36 group-hover:h-24">
                    <img
                        src="${item.image}"
                        height="60"
                        width="120"
                        class="object-cover rounded-tl-2xl rounded-tr-2xl w-full h-full"
                    />
                </div>
                <div class="py-4 px-3">
                    <h1 class="font-[axiforma-semibold] text-[10px] group-hover:text-xs !text-secondary-light-hover">
                        ${item.title}
                    </h1>
                    <p class="font-[axiforma-regular] text-[8px] group-hover:text-[10px] text-black">${item.area}</p>
                </div>
            </li>
        `).join
        ('')

        cardArea.innerHTML = card

        this.innerHTML = ''
    }
}

customElements.define('card-area', CardArea);
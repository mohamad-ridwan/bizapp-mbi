class NumberCustomers extends HTMLElement{
    static get observedAttributes() {
        return [];
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
        this.innerHTML = `
        <div class="flex overflow-hidden rounded-xl flex-col justify-end col-span-1 bg-cover h-full"
            style="background-image: url(../../../assets/images/transaction.jpg);">
            <div class="flex flex-col gap-10 h-full justify-end p-8"
                style="background-image: linear-gradient(0deg,#fff,#ffffffd7 50%,transparent)">
                <div class="flex flex-col gap-2">
                    <h1 class="font-[axiforma-regular] text-sm !text-neutral-default">Jumlah Pelanggan
                    </h1>
                    <p class="font-[axiforma-semibold] text-3xl text-black">400</p>
                </div>
                    <p class="font-[axiforma-regular] !text-primary-purple-icon text-sm">Sehingga Juli 2024
                    </p>
                </div>
        </div>
        `
    }
}

customElements.define('number-customers', NumberCustomers);
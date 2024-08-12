class Navbar extends HTMLElement{
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
            <nav
                class="block w-full px-6 py-3 mx-auto text-white bg-white border border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 shadow-md h-fit">
                <div class="flex items-center justify-between text-blue-gray-900">
                    <div class="w-72">
                        <div class="relative h-10 w-full min-w-[200px] items-center flex">
                            <i class="fa-solid fa-magnifying-glass absolute left-3 !text-primary-dark text-[15px]"></i>
                            <input type="text" placeholder="Carian.."
                                class="peer h-full w-full rounded-[7px] !border-none bg-transparent !bg-secondary-gray-notif px-3 py-2.5 text-sm font-normal text-primary-black shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:!text-neutral-dark placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-none focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 font-[axiforma-medium] pl-11" />
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <button type="button" class="flex items-center gap-2">
                            <h1 class="font-[axiforma-medium] text-sm line-clamp-1 max-w-[350px]">Ave Calvar</h1>
                            <div class="flex justify-center items-center">
                                <img src="../../../assets/images/avatar/avatar.png" alt="profile mbi" height="30"
                                    width="30" class="object-cover rounded-full max-w-[30px]">
                            </div>
                        </button>
                        <button type="button"
                            class="!bg-secondary-gray-notif h-8 w-8 rounded-full flex justify-center items-center relative">
                            <i class="fa-regular fa-bell"></i>
                            <i class="fa-solid fa-circle absolute text-red-500 top-2 right-[8px] !text-[6.5px]"></i>
                        </button>
                    </div>
                </div>
            </nav>
        `
    }
}

customElements.define('navbar-component', Navbar);
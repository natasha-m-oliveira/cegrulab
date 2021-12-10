const menuItems = document.querySelectorAll("[data-menu-item]");
const btnMobile = document.querySelector("[data-btn-mobile]");
const body = document.querySelector("body");

menuItems.forEach(menuItemClick => {
    menuItemClick.addEventListener("click", () => {
        if (!menuItemClick.classList.contains("current")) {
            menuItems.forEach(menuItem => {
                menuItem.classList.remove("current");
            });
            menuItemClick.classList.add("current");
        }
        const nav = document.querySelector("[data-nav]");
        let windowSize = window.innerWidth;
        nav.classList.remove("active");
        if(windowSize <= 600){
            btnMobile.currentTarget.setAttribute("aria-label", "Abrir menu");
        }
    });
});

function toggleMenu(event) {
    //Previne no caso do mobile que o menu seja aberto e fechado na sequência
    if (event.type === "touchstart") {
        event.preventDefault();
    }
    const nav = document.querySelector("[data-nav]");
    //Toggle adiciona ou remova caso tenha a classe
    nav.classList.toggle("active");
    //Para melhorar a acessibilidade
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        body.classList.add("menu-active");
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
    } else {
        body.classList.remove("menu-active");
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
}

window.addEventListener("scroll", () => {
    const anchor = document.querySelector("[data-anchor]");
    let windowPosition = this.scrollY;
    if (anchor !== null){
        if (windowPosition >= 500) {
            anchor.classList.add("visible");
        } else {
            anchor.classList.remove("visible");
        }
    }
});

btnMobile.addEventListener("click", toggleMenu);
//Aciona o evento de clique assim que executado
btnMobile.addEventListener("touchstart", toggleMenu);

const menuItems = document.querySelectorAll("[data-menu-item]");
const btnMobile = document.querySelector("[data-btn-mobile]");
const body = document.querySelector("body");

menuItems.forEach(menuItemClick => {
    menuItemClick.addEventListener("click", () => {
        if(menuItemClick.classList.contains("current")){
        }else{
            menuItems.forEach(menuItem =>{
                menuItem.classList.remove("current");
            });
            menuItemClick.classList.add("current");
        }
        body.classList.remove("menu-active");
        const nav = document.querySelector("[data-nav]");
        nav.classList.remove("active");
        btnMobile.currentTarget.setAttribute("aria-label", "Abrir menu")
    });
});

function toggleMenu(event) {
    //Previne no caso do mobile que o menu seja aberto e fechado na sequência
    if(event.type === "touchstart"){
        event.preventDefault();
    }
    const nav = document.querySelector("[data-nav]");
    //Toggle adiciona ou remova caso tenha a classe
    nav.classList.toggle("active");
    //Para melhorar a acessibilidade
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active)
    if(active){
        event.currentTarget.setAttribute("aria-label", "Fechar menu")
        body.classList.add("menu-active");
    }else{
        event.currentTarget.setAttribute("aria-label", "Abrir menu")
        body.classList.remove("menu-active");
    }
}

btnMobile.addEventListener("click", toggleMenu);
//Aciona o evento de clique assim que executado
btnMobile.addEventListener("touchstart", toggleMenu);

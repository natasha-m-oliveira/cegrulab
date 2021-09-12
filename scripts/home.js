const servicesTitle = document.querySelector("[data-services-title");
const teamTitle = document.querySelector("[data-team-title");
const coworkingTitle = document.querySelector("[data-coworking-title");
const inputPhone = document.querySelector("#tel");
let windowSize = window.innerWidth;

function glamTitle(windowSize) {
    if (windowSize > 600) {
        servicesTitle.innerHTML = "Entenda como podemos<br />te ajudar a inovar!";
        teamTitle.innerHTML = "Conheça o time que vai<br />ajudar sua empresa!";
        coworkingTitle.innerHTML = "Faça parte do nosso<br />coworking e expanda<br />seus horizontes!";
    } else {
        servicesTitle.innerHTML = "Entenda como podemos te ajudar a inovar!";
        teamTitle.innerHTML = "Conheça o time que vai ajudar sua empresa!";
        coworkingTitle.innerHTML = "Faça parte do nosso coworking e expanda seus horizontes!";
    }
}

window.addEventListener("resize", window => {
    windowSize = window.innerWidth;
    glamTitle(windowSize);
});

inputPhone.addEventListener("input", (e) => {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

glamTitle(windowSize);
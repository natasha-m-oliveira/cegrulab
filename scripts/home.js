let slides = document.querySelectorAll(".container-slide");
let buttons = document.querySelectorAll("[data-btn]");
const prev = document.querySelector("[data-prev]");
const next = document.querySelector("[data-next]");
let index = 0;

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            buttons[i].classList.remove("active");
        }
        slides[index].classList.add("active");
        buttons[index].classList.add("active");
    });
});

function toNext(event) {
    //Previne no caso do mobile que o menu seja aberto e fechado na sequência
    if (event.type === "touchstart") {
        event.preventDefault();
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        buttons[i].classList.remove("active");
    }
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
    buttons[index].classList.add("active");
}

function toPrev(event) {
    //Previne no caso do mobile que o menu seja aberto e fechado na sequência
    if (event.type === "touchstart") {
        event.preventDefault();
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        buttons[i].classList.remove("active");
    }
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
    buttons[index].classList.add("active");
}

function autoplay() {
    toNext("click");
}
//Autoplay

setInterval(autoplay, 7000); //Slides mudam a cada 7 segundos

next.addEventListener("click", toNext);
next.addEventListener("touchstart", toNext);
prev.addEventListener("click", toPrev);
prev.addEventListener("touchstart", toPrev);
let slides = document.querySelectorAll(".container-slide");
let buttons = document.querySelectorAll("[data-btn]");
let imagesSlides = document.querySelectorAll("[data-image-slide]");
const prev = document.querySelector("[data-prev]");
const next = document.querySelector("[data-next]");
let index = 0;
let pointerPosition;
let isMove = false;

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

imagesSlides.forEach(ImageSlide => {
    ImageSlide.addEventListener("touchmove", touchMove);
    ImageSlide.addEventListener("touchend", touchEnd);
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

function touchMove(event) {
    pointerPosition = event.changedTouches[0].clientX;
    isMove = true;
}

function touchEnd() {
    if(isMove) {
        controllerSlider(pointerPosition);
    }
    isMove = false;
}

function controllerSlider(pointerPosition) {
    let slideSize = document.querySelector(".container-slide.active").offsetWidth / 2;
    if (pointerPosition > slideSize) {
        toNext("click");
    } else if (pointerPosition < slideSize) {
        toPrev("click");
    }
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
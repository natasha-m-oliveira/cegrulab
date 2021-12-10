const prev = document.querySelector("[data-prev]");
const next = document.querySelector("[data-next]");
let slides = document.querySelectorAll(".container-slide"),
    anchorButtons = document.querySelectorAll("[data-btn-anchor]"),
    buttons = document.querySelectorAll("[data-btn]"),
    index = 0,
    startX,
    startY,
    dist,
    threshold = 50, // distância mínima percorrida necessária para ser considerado slide
    allowedTime = 300, // tempo máximo permitido para percorre essa distância
    elapsedTime,
    startTime,
    isMove = false;

anchorButtons.forEach(anchorButton => {
    anchorButton.addEventListener("click", toGo);
    anchorButton.addEventListener("touchstart", toGo);
});

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

slides.forEach(slide => {
    slide.addEventListener("mouseover", mouveOver);
    slide.addEventListener("mouseout", mouseOut);
    slide.addEventListener("touchstart", touchStart);
    slide.addEventListener("touchmove", touchMove);
    slide.addEventListener("touchend", touchEnd);
});

function toGo(event) {
    if (event.type === "touchstart") {
        event.preventDefault();
    }
    const destination = "#contact";
    location.href = destination;
}

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

function touchStart(event) {
    let touchobj = event.changedTouches[0];
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime(); // o momento em que o dedo faz contato pela primeira vez com a tela
    isMove = true;
    // event.preventDefault();
    // evitar a rolagem quando dentro do div
}

function touchMove(event) {
    // event.preventDefault() // evitar a rolagem quando dentro do div
}

function touchEnd(event) {
    var touchobj = event.changedTouches[0];
    dist = touchobj.pageX - startX; // obter distância total percorrida com o dedo em contato com a tela
    elapsedTime = new Date().getTime() - startTime; // obter tempo decorrido
    // verifique se o tempo decorrido está dentro do especificado, distância horizontal percorrida> = limite e distância vertical percorrida <= 100
    var slideDirection = "";
    if (elapsedTime <= allowedTime){
        if (Math.abs(dist) >= threshold && Math.abs(touchobj.pageY - startY) <= 100){
            slideDirection = (dist < 0)? "right" : "left";
        }
    }
    isMove = false;
    controllerSlider(slideDirection);
    event.preventDefault();
}

function mouveOver(){
    isMove = true;
}

function mouseOut(){
    isMove = false;
}

function controllerSlider(slideDirection) {
    if (slideDirection == "right") {
        toNext("click");
    } else if (slideDirection == "left") {
        toPrev("click");
    }
}

function autoplay() {
    if(!isMove){
        toNext("click");
    }
}
//Autoplay

setInterval(autoplay, 7000); //Slides mudam a cada 7 segundos

next.addEventListener("click", toNext);
next.addEventListener("touchstart", toNext);
prev.addEventListener("click", toPrev);
prev.addEventListener("touchstart", toPrev);
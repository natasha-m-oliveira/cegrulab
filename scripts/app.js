import { validateForm } from "./validation.js";

const inputs = document.querySelectorAll("input");
const toasts = document.querySelector("#toasts");

function createNotification(message) {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.classList.add("error");

    notif.innerText = message;

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

inputs.forEach(input => {
    input.addEventListener("blur", (event) => {
        if(validateForm(event.target) !== ""){
            createNotification(validateForm(event.target));
            input.classList.add("invalid");
        }else{
            input.classList.remove("invalid");
        }
    });
});
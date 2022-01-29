const buttonSubmit = document.querySelector("[data-submit-form]");
const inputOrigin = document.querySelector("#origin");
const servicesTitle = document.querySelector("[data-services-title");
const teamTitle = document.querySelector("[data-team-title");
const coworkingTitle = document.querySelector("[data-coworking-title");
const inputPhone = document.querySelector("#tel");

function submitForm(event) {
    event.preventDefault();
    let origin = window.location.hash.replace("#", "");
    inputOrigin.value = origin;
}

inputPhone.addEventListener("input", (e) => {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

buttonSubmit.addEventListener("click", submitForm);
buttonSubmit.addEventListener("touchstart", submitForm);

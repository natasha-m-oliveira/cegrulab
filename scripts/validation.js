export function validateForm(input) {
    const inputType = input.dataset.type;
    let message = "";

    if (validators[inputType]) {
        //Caso o tipo de input seja igual a um dos objetos do array,
        //chamamos a função e passamos os dados do input
        validators[inputType](input);
    }

    if (!input.validity.valid) {
        message = showErrorMessage(inputType, input);
    }

    return message;
}

const errorTypes = [
    'valueMissing',
    'customError'
]

const messages = [
    "O campo não pode estar vazio.",
    "Por favor, informe o nome completo",
    "O email digitado não é válido.",
    "O telefone digitado não é válido."
];

const errorMessages = {
    name: {
        valueMissing: messages[0],
        customError: messages[1]
    },
    email: {
        valueMissing: messages[0],
        customError: messages[2]
    },
    phone: {
        valueMissing: messages[0],
        customError: messages[3]
    }
}

//Chamando as funções
const validators = {
    name: input => validateName(input),
    email: input => validateEmail(input),
    phone: input => validatePhone(input)
}

function validateName(input) {
    let value = input.value;
    if (value !== "") {
        const fullName = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][ ][A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/;
        let message = "";
        if (!(fullName.test(value))) {
            message = messages[1];
        }
        //Para exibir a mensagem de erro
        input.setCustomValidity(message);
    }
}

function validateEmail(input) {
    let value = input.value;
    if (value !== "") {
        const validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let message = "";
        if (!(validEmail.test(value))) {
            message = messages[2];
        }
        input.setCustomValidity(message);
    }
}

function validatePhone(input) {
    let value = input.value;
    if (value !== "") {
        let phoneSet = value.replace(/[^0-9]/g, "");
        let message = "";
        if (phoneSet.length <= 10) {
            message = messages[3];
        }
        input.setCustomValidity(message);
    }
}

function showErrorMessage(inputType, input) {
    let message = '';

    errorTypes.forEach(error => {
        if (input.validity[error]) message = errorMessages[inputType][error];
    });
    return message;
}
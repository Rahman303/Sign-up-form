const formEl = document.getElementById('form')

const firstNameEl = document.querySelector('#first-name')
const lastNameEl = document.querySelector('#last-name')
const emailEl = document.querySelector('#email')
const passwordEl = document.querySelector('#password')
const confirmPasswordEl = document.querySelector('#password2')

function showError(qutu, message) {
    const formControl = qutu.parentElement
    formControl.className = "form-control error"
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
    
}

function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value.trim())) {
        showSuccess(email)
    }
    else {
        showError(email, "Please, correct your email adress")
    }
}

function checkRequiried(inputlarMassivi) {
    inputlarMassivi.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} bos ola bilmez`)
        } else {
            showSuccess(input)
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} Must be min ${min} symbols`)
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} Must not be more than ${max}`)
    }
    else {
        showSuccess(input)
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `${getFieldName(input2)} Confirmation password is not correct`)
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

formEl.addEventListener('submit', function (e) {
    e.preventDefault()

    checkRequiried([firstNameEl, lastNameEl, emailEl, passwordEl, confirmPasswordEl])
    checkEmail(emailEl)
    checkLength(firstNameEl, 3, 17)
    checkLength(lastNameEl, 5, 20)
    checkLength(passwordEl, 8, 20)
    checkPasswordMatch(passwordEl, confirmPasswordEl)
})
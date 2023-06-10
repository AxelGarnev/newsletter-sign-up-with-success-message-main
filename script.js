// VARIABLES

const emailInput = document.getElementById('user-email');
const subscribeButton = document.getElementById('subscribe-button');
const dismissButton = document.getElementById('dismiss-button');
const errorMsg = document.getElementsByClassName('error-message');
const enteredEmail = document.getElementById('entered-email');
let formMsg = document.getElementsByClassName('form');
let successMsg = document.getElementsByClassName('success');


// FUNCTIONS

function emailValidation() {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let userEmail = emailInput.value

    if (userEmail.match(emailFormat)) {
        toggle();
    } else {
        errorMsg[0].classList.remove('hide');
        emailInput.classList.add('wrong');
    }
} 


function toggle() {
    let userEmail = emailInput.value

    formMsg[0].classList.toggle('hide');
    successMsg[0].classList.toggle('hide');
    enteredEmail.innerHTML = userEmail;
}

// EVENT

subscribeButton.addEventListener('click', emailValidation);
dismissButton.addEventListener('click', toggle);


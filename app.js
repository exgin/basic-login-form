const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if(usernameValue === ''){
        setErrorFor(username, 'Username can\'t  be blank.');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email can\'t be blank.');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, ' Email is not valid.');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password can\'t be blank.');
    } else {
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Password check can\'t be blank.');
    } else if (password2Value !== passwordValue){
        setErrorFor(password2, ' Passwords don\'t match.');
    } else {
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control -> it's inputs parent element
    const small = formControl.querySelector('small');

    //error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    //add success class
    formControl.className = 'form-control success';
}

function isEmail(email){
    //regex check for email from stackoverflow
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
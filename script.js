const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',(e) => {
    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
   e.preventDefault();
   //our function to check the input 
   checkInputs();
})

function checkInputs() {
    //get the values from the inputs everytime user submit
    //trim to remove all the white spaces 
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //1- check the username value 
    if(usernameValue === '')
        setErrorFor(username,'Username cannot be blank');
    else 
        //add success class 
        setSuccessFor(username);

    //2- Check the Email 
    if (emailValue == '') {
        setErrorFor(email,'Email cannot be blank');
    }
        else if(isEmail(email)) {
        setErrorFor(email,'Email is not Vaild');
    }
    else {
        setSuccessFor(email);
    }
    //3- Check password 
    if(passwordValue === '' || password2Value === '') {
        setErrorFor(password,'Password can not be empty');
    }
    else {
        if(password2Value !== passwordValue) {
            setErrorFor(password,'Password should match the check password!')
            setErrorFor(password2,'Password Check should match main password');
        }
        else {
            setSuccessFor(password);
            setSuccessFor(password2);
        }
    }
}


function setErrorFor(input,message) {
    const formControl = input.parentElement; //form control
    const small = formControl.querySelector('small');

    //add error message inside the small tag
    small.innerText = message;

    //add error class 
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //form control

    //add success class 
    formControl.className= 'form-control success';
}

function isEmail(email) {
    var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    return regExp.test(email);
}
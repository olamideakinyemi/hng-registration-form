
const form = document.getElementById("form")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener('submit', (e) =>{
   e.preventDefault();

   checkInputs();
});

//../

function checkInputs(){
    /*getting values from the input */
    const firstnameValue = firstname.value
    const lastnameValue = lastname.value
    const emailValue = email.value
    const passwordValue = password.value
     //conditional statement for firstame
    if(firstnameValue == ''){
        /*show error*/
        /*add error class*/
        setErrorFor(firstname, 'First Name cannot be empty')
    }else{
        
    }
    //conditional statement for lastname
    if(lastnameValue == ''){
        setErrorFor(lastname, 'Last Name cannot be empty')
    }
    //conditional statement for email
    if(email == (emailValue)){
        setErrorFor(email, 'Looks like this is not an email');
    }
    //conditional statement for password
    if(passwordValue == ''){
        setErrorFor(password, 'Password cannot be empty')
    }
    }
    





function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function isEmail(email){
    return /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(email);
}
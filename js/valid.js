//validação do codigo para inputs

var email = document.forms['form']['email'];
var senha = document.forms['form']['senha'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

// email.addEventListener('textInput', email_Verify);
// senha.addEventListener('textInput', pass_Verify);

function validated(){
    if(email.value.length < 8) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(senha.value.length < 5) {
        senha.style.border = "1px solid red";
        pass_error.style.display = "block";
        senha.focus();
        return onload;
    }

    if((email.value.legth >= 8) && (senha.value.legth >= 5)){
        email_error.style.display = "none";
        return ;
    }

}


// function email_Verify(){
//     if (email.value.legth >= 8){
//         email.style.border = "1px solid silver";
//         email_error.style.display = "none";
//         return true;
//     }
// }
// function pass_Verify(){
//     if (senha.value.legth >= 5){
//         senha.style.border = "1px solid silver";
//         pass_error.style.display = "none";
//         return true;
//     }
// }
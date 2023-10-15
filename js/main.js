// login function

function signup(e){
    event.preventDefault();
    //console.log('working)

    var email = document.getElementById('email').value;
    var pass = document.getElementById('senha').value;

    var user = {
        email: email,
        pass: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(user,json);
    //console.log('user added');


}

function loginFunc(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var pass = document.getElementById('senha').value;
    var result =document.getElementById('result');

    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    console.log(data)

    if(user == null){
        result.innerHTML = 'wrong email';
    }else if (email == data.email && pass == data.password){
        result.innerHTML = 'logged in';
    }else{
        result.innerHTML = 'wrong password';
    }
}
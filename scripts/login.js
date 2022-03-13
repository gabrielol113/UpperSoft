function autenticateCredentials(){
    var form = document.getElementById("login-form");
    if(sessionStorage.getItem("email") == form.email.value && sessionStorage.getItem("senha") == form.senha.value){
        open("lista-usuarios.html");
    }
    else{
        alert("Usuário não existe");
        open("index.html", "_self");
    }

}
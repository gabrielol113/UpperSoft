function Enviar() {

    var form = document.getElementById("signup-form");

    if (form.email.value == "") {
        alert("Campo email não preenchido!");
    }else if(form.gender.value == "") {
        alert("Campo gênero não preenchido!");
    }else if(form.nome.value == "") {
        alert("Campo de nome completo não preenchido!");
    }else if(form.senha.value == "") {
        alert("Campo de senha não preenchido!");
    }else if(form.confirmarSenha.value == "") {
        alert("Campo de confirmação de senha não preenchido!");
    }else if(form.state.value == "") {
        alert("Campo de estado não preenchido!");
    }else if(form.senha.value != form.confirmarSenha.value) {
        alert("A senha inserida difere da confirmação de senha!");
    }else {
        sessionStorage.setItem("email", form.email.value );
        sessionStorage.setItem("senha", form.senha.value );
        open("index.html");
    }
}

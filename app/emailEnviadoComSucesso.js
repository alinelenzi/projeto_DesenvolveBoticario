function emailEnviadoComSucesso(){
    let email = document.getElementById("email").value;

    if(email.length >= 10){
        alert("Email cadastrado com sucesso")
    }else{
        alert("Email inválido. Tente novamente!")
    }
}

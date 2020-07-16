window.addEventListener("load", function(){

let formularioLogin = document.querySelector("#login");
    let erroresLogin = [];
    let campoEmailLogin = document.getElementById("emailLogin");
    let campoPassLogin = document.getElementById("passLogin");

formularioLogin.addEventListener("submit", function (e){
    if (campoEmailLogin.value == ""){
    erroresLogin.push("El campo Email debe estar completo");

    if (campoPassLogin.value == ""){
        erroresLogin.push("El campo Contraseña debe estar completo");
        };

    if (erroresLogin.length != 0){
        e.preventDefault();
        let ulErroresLogin = document.querySelector("#erroresLogin ul");
        for (let i = 0; i < erroresLogin.length; i++){
        ulErroresLogin.innerHTML += "<li>" + erroresLogin[i] + "</li>"
                }
        }
        }});
        console.log(erroresLogin)
    });
        
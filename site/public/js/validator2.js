window.addEventListener("load", () => {
    let form = document.querySelector("form.registro");
    let errorSec = document.querySelector("#errors");
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let contraseña = document.getElementById("pass");

    form.addEventListener("submit", (e) => {
        let errors = [];

        if(nombre.value.trim() == "") {
            fullName.classList.add("is-invalid");
            errors.push("El nombre es obligatorio");
        }
        if (email.value.trim() == "") {
            errors.push("El correo es obligatorio");
        }
        if (contraseña.value.trim() == "") {
            errors.push("La contraseña es obligatorio");
        }       
        if(errors.length != 0) {
            e.preventDefault();
            
            errors.forEach(error => {
                errorSec.innerHTML += "<li>" + error + "</li>";
            })
        }
    })
});
window.addEventListener("load", function(){

    // FORMULARIO REGISTRO
    let formularioRegistro = document.querySelector("#registro");
    let errores = [];

    formularioRegistro.addEventListener("submit", function (e){
        let campoNombre = document.getElementById("nombre");
        if (campoNombre.value == ""){
            errores.push("El campo Nombre debe estar completo");
        }else if (campoNombre.value.length < 2){
            alert("El campo de Nombre debe tener al menos 2 caracteres");
        };
        
        let campoEmail = document.getElementById("email");
        if (campoEmail.value == ""){
        errores.push("El campo Email debe estar completo");
        };
    
        let campoPassword = document.getElementById("password");
        if (campoPassword.value == ""){
            errores.push("El campo Contraseña debe estar completo");
        }else if (campoPassword.value.length < 8){
            errores.push("La contraseña debe tener al menos 8 caracteres");
        };

        if (errores.length < 0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.errores ul");

            for (let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
        console.log(errores)
        });

// FORMULARIO LOGIN
//         let formularioLogin = document.querySelector("form.login");
// formularioLogin.addEventListener("submit", function (e){
//     e.preventDefault();

//     let campoEmailLogin = document.querySelector("input.emailLogin");
// if (campoEmailLogin.value == ""){
//     errores.push("El campo Email debe estar completo");

//     let campoPassLogin = document.querySelector("input.passLogin");
//         if (campoPassLogin.value == ""){
//             errores.push("El campo Contraseña debe estar completo");
//         };
//         }});
// // FIN FORMULARIO LOGIN

    }
);

// let formularioProductAdd = document.querySelector("form.productAdd");
// formularioProductAdd.addEventListener("submit", function (e){
//     e.preventDefault();
//     let productoNombre = document.querySelector("input.nombre")
//     if (productoNombre.value == ""){
//         errores.push("El campo Nombre debe estar completo");
//     }else if (campoNombre.value.lenght < 5){
//         errores.push("El campo de Nombre debe tener al menos 5 caracteres");
//     };
//     let campoDescripcion = document.querySelector("textarea.descripcion");
//     if (campoDescripcion.value == ""){
//         errores.push("El campo Email debe estar completo");
//     }else if (campoDescripcion.value.lenght < 20){
//         errores.push("La descripción debe tener al menos 20 caracteres");
//     };
// });
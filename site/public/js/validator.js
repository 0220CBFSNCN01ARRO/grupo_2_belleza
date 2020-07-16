window.addEventListener("load", function(){

    // FORMULARIO REGISTRO
    let formularioRegistro = document.querySelector("#registro");
    let errores = [];
    let campoNombre = document.getElementById("nombre");
    let campoEmail = document.getElementById("email");
    let campoPassword = document.getElementById("pass");

    formularioRegistro.addEventListener("submit", function (e){
        if (campoNombre.value == ""){
            errores.push("El campo Nombre debe estar completo");
        }else if (campoNombre.value.length < 2){
            errores.push("El campo de Nombre debe tener al menos 2 caracteres");
        };

        if (campoEmail.value == ""){
            errores.push("El campo Email debe estar completo");
        };
            
        if (campoPassword.value == ""){
            errores.push("El campo Contraseña debe estar completo");
        }else if (campoPassword.value.length < 8){
            errores.push("La contraseña debe tener al menos 8 caracteres");
        };

        if (errores.length != 0){
            e.preventDefault();
            let ulErrores = document.querySelector("#errores ul");
            for (let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                }
                // ulErrores=[];
        }
        });

    }
);

// FORMULARIO CARRITO

let formularioProductAdd = document.querySelector("#productAdd");
let productoNombre = document.getElementById("nombre")
let campoDescripcion = document.getElementById("#descripcion");
let erroresCart = [];

formularioProductAdd.addEventListener("submit", function (e){
    e.preventDefault();
    
    if (productoNombre.value == ""){
        erroresCart.push("El campo Nombre debe estar completo");
    }else if (campoNombre.value.length < 5){
        erroresCart.push("El nombre debe tener al menos 5 caracteres");
    };
    
    if (campoDescripcion.value == ""){
        erroresCart.push("El campo descripción debe estar completo");
    }else if (campoDescripcion.value.length < 20){
        erroresCart.push("La descripción debe tener al menos 20 caracteres");
    };
    if (erroresCart.length != 0){
        e.preventDefault();
        let ulErroresCart = document.querySelector("#erroresCart ul");
        for (let i = 0; i < erroresCart.length; i++){
            ulErroresCart.innerHTML += "<li>" + erroresCart[i] + "</li>"
            }
            // ulErrores=[];
    }
});
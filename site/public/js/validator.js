window.addEventListener("load", function(){

    // FORMULARIO REGISTRO
    let formularioRegistro = document.querySelector("form.registro");

    formularioRegistro.addEventListener("submit", function (e){
        e.preventDefault();

        let campoNombre = document.querySelector("input.nombre");
        if (campoNombre.value == ""){
            alert("El campo Nombre debe estar completo");
        }else if (campoNombre.value.lenght < 2){
            alert("El campo de Nombre debe tener al menos 2 caracteres");
        };
        
        let campoEmail = document.querySelector("input.email");
        if (campoEmail.value == ""){
            alert("El campo Email debe estar completo");
        };
        // else if (campoEmail.value.lenght < 2){
        //     alert("El campo de Email debe tener al menos 2 caracteres");
        // };

        let campoPassword = document.querySelector("input.password");
        if (campoPassword.value == ""){
            alert("El campo Contraseña debe estar completo");
        }else if (campoPassword.value.lenght < 8){
            alert("El campo Contraseña debe tener al menos 8 caracteres");
        };
        });

// FORMULARIO LOGIN
        let formularioLogin = document.querySelector("form.login");
formularioLogin.addEventListener("submit", function (e){
    e.preventDefault();

    let campoEmailLogin = document.querySelector("input.emailLogin");
if (campoEmailLogin.value == ""){
    alert("El campo Email debe estar completo");

    let campoPassLogin = document.querySelector("input.passLogin");
        if (campoPassLogin.value == ""){
            alert("El campo Contraseña debe estar completo");
        };
        }});
// FIN FORMULARIO LOGIN

    }
);

let formularioProductAdd = document.querySelector("form.productAdd");
formularioProductAdd.addEventListener("submit", function (e){
    e.preventDefault();
    let productoNombre = document.querySelector("input.nombre")
    if (productoNombre.value == ""){
        alert("El campo Nombre debe estar completo");
    }else if (campoNombre.value.lenght < 5){
        alert("El campo de Nombre debe tener al menos 5 caracteres");
    };
    let campoDescripcion = document.querySelector("textarea.descripcion");
    if (campoDescripcion.value == ""){
        alert("El campo Email debe estar completo");
    }else if (campoDescripcion.value.lenght < 20){
        alert("La descripción debe tener al menos 20 caracteres");
    };
});
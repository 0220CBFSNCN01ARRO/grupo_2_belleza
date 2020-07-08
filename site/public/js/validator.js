window.addEventListener("load", function(){
    let formulario = document.querySelector("form.registro");

    formulario.addEventListener("submit", function (e){
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
            alert("El campo de Contraseña debe tener al menos 8 caracteres");
        };
        });
});



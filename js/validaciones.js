var nombre = document.querySelector("#nombreapellido");
var email = document.querySelector("#correo");
var asunto = document.querySelector("#asunto");
var mensaje = document.querySelector("#mensaje");

function campoNombre(){

    if(nombre.value.length == 0){
        alert("Complete el campo Nombre")
    }  
    if(nombre.value.length>50){
        alert("El nombre no puede exceder los 50 caracteres");
    }
    return;

}

function campoCorreo(){

    if(email.value.length == 0){
        alert("Complete el campo E-mail")
    } 

    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.length>0 && !validRegex.test(email.value)){
        alert("Ha ingresado una dirección de correo inválida")
    }

    return;
}

function campoAsunto(){

    if(asunto.value.length == 0){
        alert("Complete el campo Asunto")
    } 

    if(asunto.value.length>50){
        alert("El asunto no puede exceder los 50 caracteres");
    }

}

function campoMensaje(){

    if(mensaje.value.length == 0){
        alert("Complete el campo Mensaje")
    } 

    if(mensaje.value.length>300){
        alert("El nombre no puede exceder los 300 caracteres");
    }
    return;

}


function habilitarEnviar(){
    if(nombre.value.length > 0 && email.value.length > 0 && asunto.value.length > 0 && mensaje.value.length > 0){
        document.querySelector("#enviar").disabled = false;
        botonEnviar.classList.remove("btn-off");
        botonEnviar.classList.add("btn-on");
    }
    else { 
        document.querySelector("#enviar").disabled = true;
        botonEnviar.classList.remove("btn-on");
        botonEnviar.classList.add("btn-off");
    }
}
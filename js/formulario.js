var botonEnviar = document.querySelector("#enviar");
botonEnviar.disabled = true;
botonEnviar.classList.add("btn-off");

botonEnviar.addEventListener("click",function(event){
    event.preventDefault();
    campoNombre();
    campoCorreo();
    campoAsunto();
    campoMensaje();
});
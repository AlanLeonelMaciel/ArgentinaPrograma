/*Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
elección.*/

function mostrarMensaje () {
    console.log("Correcto has mostrado un mensaje por consola");
}
const boton=document.getElementById("mensajeConsola");
boton.addEventListener("click",mostrarMensaje);
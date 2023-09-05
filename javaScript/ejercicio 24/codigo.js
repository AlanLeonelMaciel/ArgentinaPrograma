/*Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML.*/

    cacularRadio=()=>{
    event.preventDefault();
    const diametro=parseFloat(document.getElementById("Diametro").value);
    const radio=diametro/2;
    document.getElementById("resultado").textContent="El radio del circulo es: "+radio;
}
document.getElementById("formRadio").addEventListener("submit",cacularRadio);

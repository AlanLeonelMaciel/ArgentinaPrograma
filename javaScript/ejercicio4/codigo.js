/*Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario 
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla 
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”*/

/*var caracter= prompt("Ingrese S o N");
if((caracter !=="S") && (caracter !== "N")) {
    alert("Incorrecto.")
}
else{
    alert("Correcto.");
};*/
var caracter= prompt("Ingrese S o N");
if((caracter.toUpperCase()=="S")|| caracter.toUpperCase()=="N"){
    alert("Correcto");
}
else{
    alert("Incorrecto");
}

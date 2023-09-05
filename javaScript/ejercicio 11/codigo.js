/*Escribir una función que reciba un String y devuelva la palabra más larga. 
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/
var frase=prompt("Escriba una frase: ");

var array=frase.split(" ");

var palabraMax=array[0];
for(var i=0; i<array.length;i++){
    if(array[i].length>palabraMax.length){
        palabraMax=array[i];
    }
}
alert(palabraMax);
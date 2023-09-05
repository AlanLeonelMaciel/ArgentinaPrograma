/*. Escribir una función flecha que reciba una palabra y la devuelva al revés. */

var palabra=prompt("Ingrese una palabra");
var palabraAlreves = (palabra) => palabra.split('').reverse().join("");
var palabraRevertida=palabraAlreves(palabra);
alert(palabraRevertida);
//////////////////
/*AHORA CON SUBsTRING*/
var frase2= prompt("ingrese una palabra2: ");
var revertir="";
var palabraAlreves2= (frase2) => let palabraRevertida2="" for(var i=frase2.length-1;i>=0;i--){
    palabraRevertida2+=frase2.substring(i,i+1)

} frase2=palabraRevertida2;

revertir=palabraAlreves2(frase2);

alert(revertir);
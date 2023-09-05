/* Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de 
dato*/

numero=prompt("ingrese un numero: ");
numero=parseInt(numero);
var tipoDeDato=(numero1)=> typeof(numero1) ;
var tipo= tipoDeDato(numero);
alert(tipo);
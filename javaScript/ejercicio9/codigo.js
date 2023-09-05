/*. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un 
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el 
funcionamiento de la función Substring(). */

// Pedir al usuario que ingrese una frase
let frase = prompt("Ingrese una frase:");

// Separar la frase en letras y unir con espacios
let letrasSeparadas = frase.split('').join(" ");

// Mostrar la frase con un espacio entre cada letra
alert(letrasSeparadas);
alert(typeof(letrasSeparadas));

var frase2 = prompt("Ingrese una frase 2 :");
var fraseEspaciada = "";

for (var i = 0; i < frase2.length; i++) {
  
    fraseEspaciada += frase2.substring(i, i + 1);
  
    
    if (i !== frase2.length - 1) {
      fraseEspaciada += " ";
    }
  }
  
  alert(fraseEspaciada);
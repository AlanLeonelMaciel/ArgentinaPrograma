alert("¡Bienvenido!");
var frutas = prompt("Ingrese frutas separadas por comas: "); // Ejemplo: pera,manzana,uva

var frutasArray = frutas.split(","); // Convierte la cadena en un array
frutasArray.sort(); // Ordena el array alfabéticamente

var mensaje = `Sus frutas son: ${frutas}
No olvide comer siempre sano.
Ordenadas: ${frutasArray.join(" ")}`; // Convierte el array ordenado en una cadena de nuevo

alert(mensaje);
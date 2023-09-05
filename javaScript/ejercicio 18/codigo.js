/*A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/

var valores=[true, 5, false, "hola","otorrinolaringologo", "adios", 2, 1];
var numeros=[];
var textos=[];
var boleanos=[];

for (const aux of valores) {
    if(typeof aux ==="number"){
        
        numeros.push(aux);
    }else{
        if(typeof aux ==="string"){
            textos.push(aux);
           
        }else{
            boleanos.push(aux);
        }
    }
}
console.log(boleanos);
for (const auxBol of boleanos) {
    if(auxBol){
        console.log("El valor boolean es verdadero.");
    }
    else{
        console.log("El valor boolean es falso.");
    }
}
// Variables para realizar las operaciones
let suma = 0;
let resta = numeros[0]; // Inicializa la resta con el primer valor del array
let multiplicar = 1;
let dividir = numeros[0];
var mayor=" ";
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];   
    if (i > 0) {
        resta -= numeros[i]; // Resta a 'resta' a partir del segundo valor
        dividir /= numeros[i];
    }
    multiplicar *= numeros[i];    
}

for (const auxTxt of textos) {
    if(auxTxt.length>mayor.length){
        mayor=auxTxt;
    }    
}
console.log(numeros);
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicar);
console.log("División:", dividir);
console.log(textos);
console.log("mayor es: "+mayor);








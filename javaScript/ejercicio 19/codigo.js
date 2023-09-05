/*http://127.0.0.1:3000/javaScript/ejercicio 19/index.html
Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.*/
function LLenarArregloAleatorio(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = parseInt(Math.random()*100); // Llena con valores aleatorios entre 0 y 99
    }
    return arreglo;
}
const menor=(a,b)=> a-b;// Funcion flecha que resta a de b
var arregloA=new Array(50);
var arreglo2=new Array(20);

LLenarArregloAleatorio(arregloA); // funcion que llena mi arreglo con enteros aleatorios.
console.log(arregloA);
arregloA.sort(menor); // Sort que usa la funcion flecha menor para ordenar de menor a mayor.
 arreglo2=arregloA.slice(0,10);
console.log("Ordenado de menor a mayor: " + arregloA);
var cont=0;
while(cont<10){
    arreglo2.push(0.5);
    cont++;
}
    

console.log("Arreglo2: "+arreglo2);

console.log(arregloA);
console.log(arreglo2);
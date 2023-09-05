/*. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el 
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de 
todos ellos*/

var numeros=0;
var cont=0;
var acum=0;
var numMax;
var numMin;
numeros=parseInt(prompt("ingrese un numero: "));

while(numeros!=0){

    if(cont==0){
        numMax=numeros;
        numMin=numeros;
    }else{
        if(numMax<numeros){
            numMax=numeros;
        }
        if(numMin>numeros){
            numMin=numeros;
        }
    }
    acum+=numeros;
    cont++;
    numeros=parseInt(prompt("ingrese un numero: "));
}
alert(`El maximo de los numeros es: ${numMax};
El minimo de los numeros es: ${numMin};
El promedio de los numeros es: ${acum/cont}`);
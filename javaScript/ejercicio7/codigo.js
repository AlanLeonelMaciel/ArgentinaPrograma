/*. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación 
solicite números al usuario hasta que la suma de los números introducidos supere el 
límite inicial. */
var limite =prompt("Ingrese un valor limite");
var sumaNum=0;
parseInt(limite);
while(sumaNum<=limite){
    sumaNum+=parseInt(prompt("ingrsese un numero: "));

}
alert("Ya ha salido");

/* Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios 
y los muestre por pantalla.*/
var vector1 = [];
var vector2 = [];


const llenarAleatorio=()=>{
    let vector= [];
    for(var i=0; i<5;i++){
        vector[i]=parseInt(Math.random()*100);
        
    };
    return vector;
};


    vector1=llenarAleatorio();
    vector2=llenarAleatorio();

console.log("Vector 1");
console.log(vector1);
console.log("Vector 2");
console.log(vector2);
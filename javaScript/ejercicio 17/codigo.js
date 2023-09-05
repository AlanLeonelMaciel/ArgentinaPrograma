/*. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el 
resultado*/
var vector1 = [];



const llenarAleatorio=()=>{
    let vector= [];
    for(var i=0; i<5;i++){
        vector[i]=parseInt(Math.random()*100);
        
    };
    return vector;
};


    vector1=llenarAleatorio();
   console.log(vector1);

vector1.splice(vector1.length-2,vector1.length-1);
console.log(vector1);
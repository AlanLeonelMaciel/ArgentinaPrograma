/*Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. */

function Persona (nombre, edad, sexo, peso, altura){
    this.nombre=nombre;
    this.altura=altura;
    this.edad=edad;
    this.sexo=sexo;
    this.peso=peso;
    
}
const arr1=new Array();
var mensaje="";
const persona1=new Persona("alan", 28,'H',100,1.75);
//console.log(persona1);
for (const key in persona1) {
    mensaje=key+": "+persona1[key];
    arr1.push(mensaje);
}
console.log(arr1);
/*Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/
function persona (nombre, edad,sexo,peso,altura){
    this.nombre=nombre;
    this.edad=edad;
    this.sexo=sexo;
    this.peso=peso;
    this.altura=altura;

}
var persona1=new persona();
persona1.nombre=prompt("ingrese su nombre :");
persona1.edad=parseInt(prompt("ingrese su edad :"));
persona1.sexo=prompt("ingrese su sexo :");
persona1.peso=parseFloat(prompt("ingrese su peso :"));
persona1.altura=parseFloat(prompt("ingrese su altura :"));

var mensaje="Atributos de la persona: " ;

for (let atributo in persona1) {
    mensaje+=" "+atributo+" : "+persona1[atributo];
  }
  alert(mensaje);
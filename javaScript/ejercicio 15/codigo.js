/* . Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
radio del círculo lo proporcionará el usuario*/

//Area circulo= Pi*r al cuadrado.
// perimetro= 2*pi*radio.
// diametro= 2*r

function circulo (radio) {
    this.radio=radio;
};

const crearCirculo=()=> {
    let radio=parseFloat(prompt("Ingrese Radio: "));


    return new circulo(radio);
} ;

const calcularArea= (radio) => {
    
    let area = Math.PI*(radio**2);
    return area;
};
const calcularPerimetro= (radio) => {
    
    let perimetro = 2*(Math.PI)*radio;
    return perimetro;
};

var circuloNuevo=crearCirculo();
var areaCalculada= calcularArea(circuloNuevo.radio);
var perimetroCalculado= calcularPerimetro(circuloNuevo.radio);
alert("Area: "+areaCalculada);
alert("Perimetro: "+perimetroCalculado);
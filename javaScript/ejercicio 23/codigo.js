// 23.
/* let arrPalabras = new Array();
let parrafo = document.getElementById("parrafo").innerHTML;
arrPalabras = parrafo.split(" ");
for (let i=0; i < arrPalabras.length; i++) {
    console.log(arrPalabras[i]);
    if (arrPalabras[i].length>8) {
        arrPalabras[i] = `<span class="resaltado">`+arrPalabras[i]+`</span>`;
        console.log(arrPalabras[i]);
    }      
}
parrafo = arrPalabras.join(" ");
console.log(parrafo);
document.getElementById("parrafo").innerHTML = parrafo; */


// 23. alternativa
/*let arrPalabras = new Array();
var parrafo = document.getElementById("parrafo").innerHTML;
var parrafo2 = document.getElementById("parrafo");
arrPalabras = parrafo2.split(" ");
var eSpan = document.createElement("span");
for (let i=0; i < arrPalabras.length; i++) {
    console.log(arrPalabras[i]);
    if (arrPalabras[i].length>8) {
        eSpan.innerHTML=arrPalabras[i];
        eSpan.setAttribute("class", "resaltado");
        arrPalabras[i]=parrafo2.appendChild(eSpan);
        document.appendChild(eSpan);
        console.log(eSpan);
    }      
}
parrafo2 = arrPalabras.join(" ");
console.log(parrafo2.innerHTML);
document.getElementById("parrafo").innerHTML = parrafo2.innerHTML;*/


/*const parrafo = document.getElementById("parrafo");
const palabras = parrafo.textContent.split(" ");

for (var i = 0; i < palabras.length; i++) {
  var letra = palabras[i];
  if (letra.length > 8) {
    const spanElement = document.createElement("span");
    spanElement.textContent = letra;
    spanElement.style.backgroundColor = "yellow";
    palabras[i]=spanElement;
    //parrafo.removeChild(parrafo.childNodes[i + 2]); // Eliminar el nodo de texto original
  }
  parrafo.innerHTML=palabras.join(" ");
}*/



  // Obtén una referencia al botón
  var resaltarButton = document.getElementById("resaltarButton");

  // Agrega un evento clic al botón
  resaltarButton.addEventListener("click", function() {
    // Aquí puedes realizar la acción que desees al hacer clic
    
const parrafo = document.getElementById("parrafo");
var palabras = new Array;
const delimitadores = /[ —]/;

palabras=parrafo.textContent.split(delimitadores);

const nuevoParrafo=document.createElement("p");
const resaltado=document.getElementById("resaltado");
for (var i = 0; i < palabras.length; i++) {
  var letra = palabras[i];
  console.log(palabras);
  if (letra.length >8) {
    const spanElement = document.createElement("span");
    for (const aux23 of letra) {
      if(aux23!=","){
      spanElement.textContent = letra;
      spanElement.style.backgroundColor = "yellow";
      nuevoParrafo.appendChild(spanElement);
      let textNode = document.createTextNode(" ");
      nuevoParrafo.appendChild(textNode);
      }else
      {
        letra=letra.slice(0,letra.length-1);
        spanElement.textContent = letra;
        spanElement.style.backgroundColor = "yellow";
        nuevoParrafo.appendChild(spanElement);
        let textNode = document.createTextNode(", ");
        nuevoParrafo.appendChild(textNode);
      }
    }
    

  } else {
    const textNode = document.createTextNode(letra + " ");
    nuevoParrafo.appendChild(textNode);
  }
}
document.getElementById("h1Resalt").innerHTML="El parrafo resaltado quedo de la siguiente forma: ";
resaltado.replaceWith(nuevoParrafo);
  });
  
 // Limpiamos el contenido del párrafo


//parrafo.innerHTML=newElements;

/*newElements.forEach(element => {
  parrafo.appendChild(element);
  parrafo.appendChild(document.createTextNode(" ")); // Agregamos espacios entre las palabras
});*/
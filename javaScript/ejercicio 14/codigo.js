/*. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
numero de páginas*/

function libro (ISBN,titulo, autor, numPaginas) {
    this.ISBN=ISBN;
    this.titulo=titulo;
    this.autor=autor;
    this.numPaginas=numPaginas;
}
const cargarLibro=()=> {
    let ISBN=prompt("Ingrese ISBN: ");
    let titulo=prompt("Ingrese titulo: ");
    let autor=prompt("Ingrese autor: ");
    let numPaginas=prompt("Ingrese numPaginas: ");

    return new libro(ISBN,titulo, autor, numPaginas);
} ;
const mostrarLibro=(libro)=>{
    mensaje="Los atributos de este libro son: ";
    for (const atributo in libro) {
       mensaje+=" "+atributo+" : "+libro[atributo]+" ";
    }
    alert(mensaje);
} ;

var libro1=cargarLibro();
mostrarLibro(libro1);


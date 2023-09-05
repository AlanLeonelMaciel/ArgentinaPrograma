/*Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario.
<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>Obtener nombre y apellido de form </title>
</head><body>
<form id="form1" onsubmit="getFormValores()">
Nombre: <input type="text" name="nombre" value="David"><br>
Apellido: <input type="text" name="apellido" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
</html>*/

const getFormValores=(nombre, apellido)=>{
    event.preventDefault();
    nombre=document.getElementById("form1").elements["nombre"].value;
    apellido=document.getElementById("form1").elements["apellido"].value;
    console.log(nombre);
    console.log(apellido);

}


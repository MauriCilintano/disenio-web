let usuarios = [];
$("#btndata").click(guardar);

function guardar(){
    let nombre = $("#nom").val();
    let imagen = $("#img").val();
let ruta = `img/${imagen.substr(imagen.lastIndexOf('\\'))}`;

var us = new Usuario(nombre, ruta);

if(nombre.length > 0 && !nombre.match(/[0-9]+/)){ 
  usuarios.push(us);
  $("#data").html(`<tr><th>codigo</th><th>nombre</th><th>ruta</th></tr>`);
}else{
    $("#data2").html("¡Error al ingresar el nombre!");
}

for (let i = 0; i < usuarios.length; i++) {
    $("#data").append(usuarios[i].mostrarInfo());
}
}

function Usuario(_nombre, _imagen) {
this.codigo = usuarios.length + 1;
  this.nombre = _nombre;
  this.imagen = _imagen;
  this.mostrarInfo = function () {

    return `
    <tr>
    <td>
    ${this.codigo} </td>
    <td>
    ${this.nombre} </td> 
    <td>
    <img src="${this.imagen}"></td>
    </tr>`;
}
}
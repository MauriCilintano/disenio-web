let usuariosSinSaldo = [];
var usuarios = [];
let nombre_correcto = [];
$("#btndata").click(guardar);

function guardar() {
  let nombre = $("#nom").val();
  let contraseña = $("#contra").val();
  let saldo = Number($("#saldo").val());

  var us = new Usuario(nombre, contraseña, saldo);
  if (
    saldo >= 0 &&
    contraseña.length > 0 &&
    contraseña.match(/[A-Z]+/) &&
    contraseña.match(/[0-9]+/) &&
    nombre.length > 0 &&
    !nombre.match(/[0-9]+/)
  ) {
    usuarios.push(us);
    console.log(usuarios);
  }
}

function Usuario(_nombre, _contraseña, _saldo) {
  this.nombre = _nombre;
  this.contraseña = _contraseña;
  this.saldo = _saldo;
  this.mostrarInfo = function () {
    return `NOMBRE = ${this.nombre} <BR> CONTRASEÑA = ${this.contraseña} <BR> SALDO = ${this.saldo}`;
  };
}

$("#btndata2").click(Mostrar);

function Mostrar() {
  if (usuarios.length >= 2) {
    let saldo0 = 0;

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].saldo === saldo0) {
        saldo0 = usuarios[i].saldo;
      }
    }
    for (let i = 0; i < usuarios.length; i++) {
      if (saldo0 == usuarios[i].saldo) {
        usuariosSinSaldo.push(usuarios[i].nombre);
      }
    }

    $("#data3").append("El usuario sin saldo es: " + usuariosSinSaldo + " ");

    for (let i = 0; i < usuarios.length; i++) {
      $("#data2").append("Usuario: <br>" + usuarios[i].mostrarInfo() + "<br>");
    }

    let mayor = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].saldo > mayor) {
        mayor = usuarios[i].saldo;
      }
    }

    for (let i = 0; i < usuarios.length; i++) {
      if (mayor == usuarios[i].saldo) {
        nombre_correcto.push(usuarios[i].nombre);
      }
    }

    $("#data").append("El usuario con mayor saldo es:" + nombre_correcto + " ");
  }
}

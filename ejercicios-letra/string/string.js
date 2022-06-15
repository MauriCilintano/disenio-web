
let texto = "Hoy es jueves 12 de mayo."

// let texto = new String ("Hoy es jueves 12 de mayo");


console.log(texto.length); //da el largo del texto

console.log(texto.charAt(2)); //da el caacter de la 2 posicion

console.log(texto.charAt(texto.length -1)); // imprime el ultimo char

console.log(texto.indexOf("ueve")); // posicion/indice de la cadena

console.log(texto.lastIndexOf("e")); // Retorna el num de la psicion de la letra que aparezca por ultima vez en el string

texto.toLowerCase(); // pone el string en miniscula
texto.toUpperCase(); // pone el string en matuscula

console.log(texto.substr(2,7)) // el 2 es posicion | el 7 es la cantidad de caracteres a partir de la posocion

console.log(texto.substring(2,10)); // el dos es la possicion inicial | el 10 es posicion de fin excluido del rango

let alias = [];
$("#btndata").click(guardar);

    function guardar () {
    let text = $("#texto").val();

    alias.push(text);
}

$("#btndata2").click(mostrar);

function mostrar(){

    let normal = Sinrepetir(alias);
    
    $("#data").html("");

        $("#data").append("<br> Los alias no repetidos ingresados son: " + normal + " ");
        

}

function Sinrepetir(alias){

    let aliasOrdenado = alias.sort();
    let norepetido = [];

    for (i = 0; i < aliasOrdenado.length; i++) {
        
        if (aliasOrdenado[i] !== aliasOrdenado[i + 1]) {
            norepetido.push(aliasOrdenado[i])
        }
    
    }
    return norepetido;
}



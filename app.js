// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function creaArray(){
    let amigos = [];
    return amigos;
}

function agregarAmigo(){
    amigo = document.getElementById("amigo");
    if(amigo.value != ""){
        amigos.push(amigo.value);
        document.getElementById("amigo").value = "";
    }
    else
        alert("Por favor, inserte un nombre.");
    console.log(amigos);
}

let amigos = creaArray();
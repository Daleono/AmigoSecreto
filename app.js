// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
    amigo = document.getElementById("amigo");
    if(amigo.value != ""){
        amigos.push(amigo.value);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
    else
        alert("Por favor, inserte un nombre.");
}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let mostrar = "";

    for(let i = 0 ; i < amigos.length ; i++)
        mostrar = `${mostrar} <li> ${amigos[i]} </li>`;

    lista.innerHTML = mostrar;
}

function sortearAmigo(){
    if(amigos != null){
        let azar = Math.floor(amigos.length*Math.random());
        amigoSecreto = document.getElementById("resultado");
        amigoSecreto.innerHTML = amigos[azar];
    }
}

var amigos = [];

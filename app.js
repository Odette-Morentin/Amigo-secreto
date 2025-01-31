let amigos = []; //Almacena los nombres de los amigos

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value; //Obtiene el input del nombre del amigo

    //Validación casilla vacía
    if (nombreAmigo == ""){
        alert("Debes ingresar un nombre");
    } else {
        amigos.push(nombreAmigo);
    }

    //Limpiar espacio
    document.querySelector("#amigo").value = ""; 
    recorrerArray();
}

function recorrerArray(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Borra el contenido de la lista
    //Recorre el array de amigos
    for ( let i = 0; i<amigos.length; i++){
        let item = document.createElement("li"); //Crea un elemento li
        item.textContent = amigos[i]; //Asigna el texto del item
        lista.appendChild(item); //Agrega el item a la lista
    }
}
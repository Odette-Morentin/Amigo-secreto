let amigos = []; //Almacena los nombres de los amigos

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value; //Obtiene el input del nombre del amigo
    //Validación casilla vacía
    if (nombreAmigo == ""){
        alert("Debes ingresar un nombre");
    } else {
        amigos.push(nombreAmigo);
    }
    console.log(nombreAmigo)

    //Limpiar espacio
    document.querySelector("#amigo").value = ""; 
}
function milanesa() {
  return alert("MILA MILA MILANE NE SA");
}

const usuarios = ["Carlos", "Edu", "Enzo", "Gaston", "Julieta", "Runa"];

const mostrarUsuarios = document.getElementById("mostrar-usuarios");

function mostrarUsuariosFunc() {
  return console.log(usuarios);
}

mostrarUsuarios.addEventListener("click", function () {
  mostrarUsuariosFunc();
});

const nodos = document.getElementById("nodos");

function agregarNodo() {
  console.log("HOLA");
  const nodo = document.createElement("p");
  nodo.textContent = "MILANESA";
  document.getElementById("nodos").appendChild(nodo);
}

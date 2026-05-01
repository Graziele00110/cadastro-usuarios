let usuarios = [];

function adicionarUsuario() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  if (nome === "" || email === "") {
    alert("Preencha todos os campos!");
    return;
  }

  usuarios.push({ nome, email });
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  usuarios.forEach((user, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${user.nome} - ${user.email} 
      <button onclick="removerUsuario(${index})">Excluir</button>`;
    lista.appendChild(li);
  });
}

function removerUsuario(index) {
  usuarios.splice(index, 1);
  atualizarLista();
}
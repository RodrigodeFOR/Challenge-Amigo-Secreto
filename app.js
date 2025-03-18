const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (!nome) {
        alert("Por favor, digite um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
};

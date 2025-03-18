let amigos = []; // Agora podemos redefinir toda a lista, se necessário.

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    let lista = document.getElementById("listaAmigos");

    if (!nome) {
        alert("Por favor, digite um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

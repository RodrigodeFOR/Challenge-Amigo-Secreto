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
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array e adiciona os nomes à lista visível
    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

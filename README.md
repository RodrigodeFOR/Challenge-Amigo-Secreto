# 🎉 Amigo Secreto - Sorteador de Nomes 🎁  

Este é um simples **sorteador de amigo secreto** feito em **JavaScript, HTML e CSS**.  

## 📌 Funcionalidades  
✅ **Adicionar Nomes**: Os usuários podem inserir nomes na lista.  
✅ **Validar Entrada**: Impede a adição de nomes vazios.  
✅ **Visualizar Lista**: Exibe todos os nomes adicionados.  
✅ **Sortear Nome**: Escolhe aleatoriamente um amigo secreto.  

## 📂 Estrutura do Projeto  
```
/projeto-amigo-secreto
│── index.html  # Estrutura da página
│── style.css   # Estilos visuais
│── app.js      # Lógica do sorteio
│── README.md   # Documentação do projeto
```

## 🚀 Como Usar  
1️⃣ **Abra o `index.html` no navegador**.  
2️⃣ **Digite um nome no campo de entrada** e clique em "Adicionar".  
3️⃣ **Veja os nomes listados abaixo**.  
4️⃣ **Clique em "Sortear Amigo"** para exibir o nome sorteado.  

## 🛠 Tecnologias Utilizadas  
- **HTML5** → Estrutura do site  
- **CSS3** → Estilização  
- **JavaScript** → Lógica do sorteio  

## 📜 Código Principal (`app.js`)  
```javascript
const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!nome) {
        alert("Por favor, digite um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `<li>🎉 Seu amigo secreto é <strong>${sorteado}</strong>! 🎉</li>`;
}
```

## Melhorias Futuras  
🔹 Opção para remover nomes da lista.  
🔹 Botão para limpar toda a lista.  
🔹 Animação ao sortear o amigo secreto.  

---

👨‍💻 **Desenvolvido por RodrigodeFOR - Divirta-se com seu amigo secreto! 🎅🎁  
```
![2025-03-18 (1)](https://github.com/user-attachments/assets/689357fd-3fdb-47b7-ba13-3701ecd978e5)

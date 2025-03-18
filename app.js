//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Verifica se o nome não está vazio
    if (nome !== '') {
        amigos.push(nome);
        input.value = ''; // Limpa o campo de entrada
        
        // Atualiza a lista visível na página
        atualizarListaAmigos();
    }
}

// Função para atualizar a lista visível de amigos
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista existente

    // Cria um item para cada amigo na lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear!');
        return;
    }

    // Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
}

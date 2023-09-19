function filtrarTransacoes() {
    const filtro = document.getElementById('filtro').value; // Pega o valor selecionado no dropdown
    const tabela = document.getElementById('dataTable').querySelector('tbody'); // Seleciona o corpo da tabela
    const linhas = tabela.getElementsByTagName('tr'); // Pega todas as linhas da tabela

    for (let i = 0; i < linhas.length; i++) {
        const tipoTransacao = linhas[i].getElementsByTagName('td')[3].textContent; // Pega o valor do tipo na linha atual

        if (filtro === 'todos' || tipoTransacao === filtro) {
            linhas[i].style.display = ""; // Mostra a linha
        } else {
            linhas[i].style.display = "none"; // Esconde a linha
        }
    }
}

function addTransaction() {
    const descricao = document.getElementById('descricao').value;
    const tipo = document.getElementById('tipo').value;
    const valor = document.getElementById('valor').value;

    // Verificando se todos os campos estão preenchidos
    if (!descricao || !tipo || !valor) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Pegar a tabela e o corpo da tabela
    const tableBody = document.getElementById('dataTable').querySelector('tbody');

    // Criar a nova linha e as células
    const tr = document.createElement('tr');

    // Supondo que seu ID seja sequencial e que o último ID seja o número de linhas, apenas para simplicidade. 
    // Em aplicações reais, um mecanismo mais robusto seria necessário para gerar IDs.
    const newId = tableBody.rows.length + 1;

    // Usando template literals para construir a nova linha
    tr.innerHTML = `
        <td>${newId}</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td>${descricao}</td>
        <td>${tipo}</td>
        <td>R$ ${parseFloat(valor).toFixed(2)}</td>
    `;

    // Adicionar a nova linha ao corpo da tabela
    tableBody.appendChild(tr);

    // Limpar os campos de entrada após adicionar a transação
    document.getElementById('descricao').value = '';
    document.getElementById('tipo').value = 'Débito';
    document.getElementById('valor').value = '';
}

document.getElementById('boletoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obter valores do formulário
    const valor = document.getElementById('valor').value;
    const nome = document.getElementById('nome').value;
    const vencimento = document.getElementById('vencimento').value;

    // Converta o valor para formato float (para salvar no banco, por exemplo)
    let valorFloat = parseFloat(valor.replace('R$', '').replace(',', '.').replace(/\s/g, '').replace(/\./g, '')) / 100;

    // Alerta para confirmação do boleto emitido
    alert(`Boleto emitido com sucesso! Valor: R$ ${valorFloat.toFixed(2).replace('.', ',')}`);

    // Chamar a função para gerar opções de pagamento (Boleto & PIX)
    generatePaymentOptions(nome, valorFloat, vencimento);
});

document.getElementById('valor').addEventListener('input', function(e) {
    let value = parseFloat(e.target.value.replace('R$', '').replace(',', '.').replace(/\s/g, '').replace(/\./g, '')) / 100;
    if (value > 35000) {
        value = 35000;
    }
    e.target.value = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
});

function generatePaymentOptions(name, amount, dueDate) {
    // Simulando a geração de um boleto e PIX
    let boletoCode = "12345.67890 12345.67890 12345.67890 12345.67890 12345.67890";
    let pixCode = "1234567890ABCD";

    // Exibindo na página
    const paymentOptionsDiv = document.getElementById("paymentOptions");
    paymentOptionsDiv.innerHTML = `
        <h2>Boleto</h2>
        <p>${boletoCode}</p>

        <h2>PIX de Cobrança</h2>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${pixCode}" alt="QR Code PIX">
    `;
}

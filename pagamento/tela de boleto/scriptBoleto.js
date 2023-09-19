function gerarPix() {
    var codigoBoleto = document.getElementById("codigoBoleto").value;

    if (codigoBoleto) {
        // Aqui, vamos criar um link de pagamento baseado no código do boleto
        var linkPagamento = "https://meusite.com/pagar?boleto=" + encodeURIComponent(codigoBoleto);

        // Gerar QR Code com o link de pagamento
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: linkPagamento,
            width: 128,
            height: 128
        });
    } else {
        alert("Por favor, insira um código de boleto válido.");
    }
}
function revealBalance(icon) {
    const balance = icon.parentElement.querySelector('.visible-balance');
    const hiddenBalance = icon.parentElement.querySelector('.hidden-balance');

    if (balance.style.display === 'none') {
        balance.style.display = 'inline';
        hiddenBalance.style.display = 'none';
    } else {
        balance.style.display = 'none';
        hiddenBalance.style.display = 'inline';
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Máscara
    function maskMoney(element) {
        VMasker(element).maskMoney({
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$ ',
            zeroCents: true
        });
    }

    const priceInput = document.getElementById("productPrice");
    maskMoney(priceInput);

    // Validação do preço
    function isValidPrice(price) {
        const pricePattern = /^R\$ \d+,\d{2}$/;
        return pricePattern.test(price);
    }

    // Manipulação da entrada de preço
    function handlePriceInput(inputElement) {
        let value = inputElement.value.replace(/[^0-9,]/g, '');
        if (value.includes(',')) {
            const parts = value.split(',');
            value = parts[0] + ',' + parts[1].slice(0, 2);
        }
        inputElement.value = value;
    }
    
    // Link de geração
    function generateLink() {
        const productName = document.getElementById('productName').value;
        let productPrice = document.getElementById('productPrice').value;

        if (!isValidPrice(productPrice)) {
            alert('Informe o preço no formato R$ 0,01');
            return;
        }

        const paymentLink = `https://payment-site.com/pay?product=${productName}&price=${productPrice.replace('R$ ', '').replace(',', '.')}`;

        const urlDisplay = document.getElementById('paymentURL');
        urlDisplay.textContent = paymentLink;

        const paymentButton = document.getElementById('paymentButton');
        paymentButton.style.display = 'block';
        paymentButton.onclick = function() {
            window.open(paymentLink, '_blank');
        };
    }

    document.getElementById("paymentForm").addEventListener("submit", function(event) {
        event.preventDefault();
        generateLink();
    });
});

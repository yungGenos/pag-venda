let currentType = "";

function selectTransferType(type) {
    console.log(`Tipo de transferência selecionado: ${type}`);
}

function selectRecipientType(type) {
    const recipientData = document.getElementById("recipient-data");
    
    if (type === 'CPF') {
        recipientData.placeholder = "XXX.XXX.XXX-XX";
        currentType = 'CPF';
    } else if (type === 'CNPJ') {
        recipientData.placeholder = "XX.XXX.XXX/XXXX-XX";
        currentType = 'CNPJ';
    }

    console.log(`Tipo de destinatário selecionado: ${type}`);
}

function selectAccountType(type) {
    console.log(`Tipo de conta selecionado: ${type}`);
}

function executeTransfer() {
    const bank = document.getElementById("bank-select").value;
    const agency = document.getElementById("agency").value;
    const account = document.getElementById("account").value;
    const transferDate = document.getElementById("transfer-date").value;
    const amount = document.getElementById("amount").value;

    alert(`Transferência de R$${amount} realizada com sucesso para o banco ${bank}, agência ${agency}, conta ${account} na data ${transferDate}.`);
}

function applyMask(field) {
    let value = field.value;
    value = value.replace(/\D/g, ""); // Remove tudo que não é dígito

    if (currentType === 'CPF') {
        // Aplicar máscara de CPF
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else if (currentType === 'CNPJ') {
        // Aplicar máscara de CNPJ
        value = value.replace(/^(\d{2})(\d)/, "$1.$2");
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }

    field.value = value;
}
function formatCurrency(field) {
    let value = field.value;
    value = value.replace(/\D/g, ""); // Remove tudo que não é dígito
    value = value.replace(/(\d)(\d{2})$/, "$1,$2"); // coloca vírgula antes dos últimos 2 dígitos
    value = "R$ " + value;

    if(parseFloat(value.replace("R$ ", "").replace(",", ".")) > 15000) {
        alert("O valor máximo permitido é R$ 15.000,00");
        value = "R$ 15.000,00";
    }

    field.value = value;
}

    function selectTransferType(type) {
        // Remover a classe de todos os botões primeiro
        document.getElementById("docButton").classList.remove("button-selected");
        document.getElementById("tedButton").classList.remove("button-selected");
    
        if (type === 'DOC') {
            document.getElementById("docButton").classList.add("button-selected");
        } else if (type === 'TED') {
            document.getElementById("tedButton").classList.add("button-selected");
        }
        
        console.log(`Tipo de transferência selecionado: ${type}`);
    }
    function selectTransferType(type) {
        // Remova a classe de todos os botões primeiro
        const docButton = document.getElementById("docButton");
        const tedButton = document.getElementById("tedButton");
        
        docButton.classList.remove("button-selected");
        tedButton.classList.remove("button-selected");
    
        // Adicione a classe ao botão selecionado
        if (type === 'DOC') {
            docButton.classList.add("button-selected");
        } else if (type === 'TED') {
            tedButton.classList.add("button-selected");
        }
    
        console.log(`Tipo de transferência selecionado: ${type}`);
    }
    function selectTransferType(type) {
        console.log(`Tipo de transferência selecionado: ${type}`);
    }
    function selectTransferType(type) {
        // Remove a classe de todos os botões primeiro
        const contaCorrenteButton = document.getElementById("ContaCorrenteButton");
        const contaPoupancaButton = document.getElementById("ContaPoupancaButton");
    
        contaCorrenteButton.classList.remove("button-selected");
        contaPoupancaButton.classList.remove("button-selected");
    
        // Adiciona a classe ao botão selecionado
        if (type === 'Conta Corrente') {
            contaCorrenteButton.classList.add("button-selected");
        } else if (type === 'Conta Poupança') {
            contaPoupancaButton.classList.add("button-selected");
        }
    
        console.log(`Tipo de transferência selecionado: ${type}`);
    }

    function validateForm() {
        const bank = document.getElementById("bank-select").value;
        const agency = document.getElementById("agency").value;
        const account = document.getElementById("account").value;
        const transferDate = document.getElementById("transfer-date").value;
        const amount = document.getElementById("amount").value;
    
        // Verificar se algum campo está vazio
        if (!bank || !agency || !account || !transferDate || !amount) {
            alert("Por favor, preencha todos os campos.");
            return false;  // Impede o envio do formulário
        }
    
        return true;  // Permite o envio do formulário
    }
    
    function executeTransfer() {
        if (validateForm()) {
            const bank = document.getElementById("bank-select").value;
            const agency = document.getElementById("agency").value;
            const account = document.getElementById("account").value;
            const transferDate = document.getElementById("transfer-date").value;
            const amount = document.getElementById("amount").value;
    
            alert(`Transferência de R$${amount} realizada com sucesso para o banco ${bank}, agência ${agency}, conta ${account} na data ${transferDate}.`);
        }
    }
    
    

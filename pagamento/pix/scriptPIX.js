function setAmount(value) {
  document.getElementById("amountInput").value = value;
}
//<!----kai_genos------->
function generateQRCode() {
  const amount = document.getElementById("amountInput").value;
  const pixKey = document.getElementById("pixKeyInput").value;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${pixKey}&amount=${amount}`;
  document.getElementById("qrCode").src = qrCodeUrl;
}

function efetuarPix() {
  const amount = document.getElementById("amountInput").value;
  const pixKey = document.getElementById("pixKeyInput").value;
  alert(`Efetuando PIX no valor de R$ ${amount} para a chave PIX ${pixKey}`);
}
//<!----kai_genos------->
function showPixInputField(option) {
  const pixKeyInput = document.getElementById("pixKeyInput");

  if (option === "cpf") {
    pixKeyInput.type = "text";
    pixKeyInput.placeholder = "Digite o CPF";
    pixKeyInput.pattern = "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}";
    pixKeyInput.title = "Digite um CPF válido (formato: xxx.xxx.xxx-xx)";
    pixKeyInput.oninput = function () {
      this.value = this.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    };
  } else if (option === "telefone") {
    pixKeyInput.type = "text";
    pixKeyInput.placeholder = "Digite o telefone";
    pixKeyInput.pattern = "\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}";
    pixKeyInput.title = "Digite um telefone válido (formato: (xx) xxxxx-xxxx)";
    pixKeyInput.oninput = function () {
      this.value = this.value.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    };
  } else {
    pixKeyInput.type = "text";
    pixKeyInput.placeholder = "Digite a chave PIX";
    pixKeyInput.pattern = "[a-zA-Z0-9]{6,}";
    pixKeyInput.title = "Digite uma chave PIX válida (mínimo 6 caracteres, letras e números)";
    pixKeyInput.oninput = null;
  }
}
//<!----kai_genos------->
// QR code scanner
const scanner = new Instascan.Scanner({ video: document.getElementById('qrScanner') });
scanner.addListener('scan', function (content) {
  document.getElementById("pixKeyInput").value = content;
});
//<!----kai_genos------->
Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    console.error('No cameras found.');
  }
}).catch(function (e) {
  console.error(e);
});
//<!----kai_genos------->
// Função para mostrar o campo de entrada correto de acordo com a opção selecionada
function showPixInputField(option) {
const pixInputField = document.getElementById('pixInputField');
pixInputField.innerHTML = ''; // Limpa o campo de entrada antes de adicionar o novo
//<!----kai_genos------->
switch (option) {
case 'CPF':
  pixInputField.innerHTML = '<input type="text" id="pixKeyInput" class="pix-key-input" placeholder="Digite o CPF" maxlength="14">';
  document.getElementById('pixKeyInput').addEventListener('input', formatCPF);
  break;
case 'E-mail':
  pixInputField.innerHTML = '<input type="email" id="pixKeyInput" class="pix-key-input" placeholder="Digite o E-mail">';
  break;
case 'Telefone':
  pixInputField.innerHTML = '<input type="tel" id="pixKeyInput" class="pix-key-input" placeholder="Digite o Telefone">';
  break;
case 'Chave Aleatória':
  pixInputField.innerHTML = '<input type="text" id="pixKeyInput" class="pix-key-input" placeholder="Digite a Chave Aleatória">';
  break;
default:
  break;
}
}
//<!----kai_genos------->
// Função para formatar o campo CPF no formato 999.999.999-99
function formatCPF() {
const cpfInput = document.getElementById('pixKeyInput');
const value = cpfInput.value.replace(/\D/g, '');
const formattedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
cpfInput.value = formattedValue;
}
// Função para formatar o campo E-mail
function formatEmail() {
  const emailInput = document.getElementById('pixKeyInput');
  const value = emailInput.value.toLowerCase().trim();
  emailInput.value = value;
}
//<!----kai_genos------->
// Função para formatar o campo Telefone com no máximo 11 caracteres
function formatTelefone() {
  const telefoneInput = document.getElementById('pixKeyInput');
  const value = telefoneInput.value.replace(/\D/g, '').substring(0, 11);
  telefoneInput.value = value;
}
//<!----kai_genos------->
// Função para formatar o campo Chave Aleatória (deixa apenas letras e números)
function formatChaveAleatoria() {
  const chaveInput = document.getElementById('pixKeyInput');
  const value = chaveInput.value.replace(/[^a-zA-Z0-9]/g, '');
  chaveInput.value = value;
}
// Função para mostrar o campo de entrada correto de acordo com a opção selecionada
// Função para mostrar o campo de entrada correto de acordo com a opção selecionada
function showPixInputField(option) {
  const pixInputField = document.getElementById('pixInputField');
  pixInputField.innerHTML = ''; // Limpa o campo de entrada antes de adicionar o novo
//<!----kai_genos------->
  switch (option) {
    case 'CPF':
      pixInputField.innerHTML = `
        <input type="text" id="pixKeyInput" class="pix-key-input" placeholder="Digite o CPF" maxlength="14">
        <div class="pix-option-description">Formato: 999.999.999-99</div>`;
      document.getElementById('pixKeyInput').addEventListener('input', formatCPF);
      break;
    case 'E-mail':
      pixInputField.innerHTML = `
        <input type="text" id="pixKeyInput" class="pix-key-input" placeholder="Digite o E-mail">
        <div class="pix-option-description">Exemplo: exemplo@email.com</div>`;
      document.getElementById('pixKeyInput').addEventListener('input', formatEmail);
      break;
    case 'Telefone':
      pixInputField.innerHTML = `
        <input type="text" id="pixKeyInput" class="pix-key-input" placeholder="Digite o Telefone">
        <div class="pix-option-description">Máximo de 11 dígitos (com DDD)</div>`;
      document.getElementById('pixKeyInput').addEventListener('input', formatTelefone);
      break;
    case 'Chave Aleatória':
      pixInputField.innerHTML = `
        <input type="text" id="pixKeyInput" class="pix-key-input" placeholder="Digite a Chave Aleatória">
        <div class="pix-option-description">Aceita letras e números</div>`;
      document.getElementById('pixKeyInput').addEventListener('input', formatChaveAleatoria);
      break;
    default:
      break;
  }
}
// Função para gerar uma chave aleatória no formato XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
function generateRandomKey() {
  const uuidPattern = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
  return uuidPattern.replace(/[x]/g, () => {
    const randomHexDigit = Math.floor(Math.random() * 16).toString(16);
    return randomHexDigit;
  });
}

// Função para atualizar o QR Code com a chave gerada
function updateQRCode(key) {
  const qrCodeContainer = document.getElementById('qrCode');
  const qrCode = new QRCode(qrCodeContainer, {
    text: key,
    width: 240,
    height: 240,
  });
}
//<!----kai_genos------->
// Função que é chamada quando o botão "Crie uma chave" é clicado
function generateAndDisplayKey() {
  const randomKey = generateRandomKey();
  updateQRCode(randomKey);
}




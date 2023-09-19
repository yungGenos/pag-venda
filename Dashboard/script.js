const App = {
    domElements: {
        dollarRate: document.getElementById("dollarRate"),
        euroRate: document.getElementById("euroRate"),
        selicRate: document.getElementById("selicRate"),
        cdbRate: document.getElementById("cdbRate"),
        transactionsList: document.getElementById("transactionsList")
    },

    initializeTransactions: function() {
        this.loadLastTransactions();

        let mockRates = this.getRates();
        this.domElements.dollarRate.textContent = `R$ ${mockRates.dollar}`;
        this.domElements.euroRate.textContent = `R$ ${mockRates.euro}`;
        this.domElements.selicRate.textContent = `${mockRates.selic} ao ano`;
        this.domElements.cdbRate.textContent = `${mockRates.cdb} ao ano`;

        this.getExchangeRates().then(realRates => {
            if (realRates) {
                this.domElements.dollarRate.textContent = `R$ ${realRates.dollar}`;
                this.domElements.euroRate.textContent = `R$ ${realRates.euro}`;
            }
        });
    },

    loadLastTransactions: function() {
        const transactions = [
            "Depósito: R$100,00",
            "Retirada: R$50,00",
            "Depósito: R$25,00"
        ];

        this.domElements.transactionsList.innerHTML = "";
        transactions.forEach(transaction => {
            const li = document.createElement("li");
            li.textContent = transaction;
            this.domElements.transactionsList.appendChild(li);
        });
    },

    getRates: function() {
        return {
            dollar: '5.30',
            euro: '6.20',
            selic: '2.00%',
            cdb: '3.00%'
        };
    },

    async getExchangeRates() {
        try {
            const response = await fetch('https://open.er-api.com/v6/latest/BRL');
            const data = await response.json();
            return {
                dollar: data.rates.USD.toFixed(2),
                euro: data.rates.EUR.toFixed(2)
            };
        } catch (error) {
            console.error("Erro ao buscar as taxas de câmbio:", error);
            alert("Não foi possível carregar as taxas de câmbio. Tente novamente mais tarde.");
            return null;
        }
    }
};

const Charts = {
    initialize: function() {
        this.createLineChart();
        this.createBarChart();
        this.createPieChart();
        this.createRadarChart();
    },

    createLineChart: function() {
        let lineCtx = document.getElementById('lineChart').getContext('2d');
        window.lineChart = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                datasets: [{
                    label: 'Vendas',
                    data: [10, 23, 15, 30, 20],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            }
        });
    },

    createBarChart: function() {
        let barCtx = document.getElementById('barChart').getContext('2d');
        window.barChart = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
                datasets: [{
                    label: 'Quantidade Vendida',
                    data: [10, 20, 30, 15],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    },

    createPieChart: function() {
        let pieCtx = document.getElementById('pieChart').getContext('2d');
        window.pieChart = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Vermelho', 'Azul', 'Amarelo'],
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 205, 86, 0.2)'
                    ]
                }]
            }
        });
    },

    createRadarChart: function() {
        let radarCtx = document.getElementById('radarChart').getContext('2d');
        window.radarChart = new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['Comer', 'Beber', 'Dormir', 'Trabalhar', 'Correr'],
                datasets: [{
                    label: 'Meu Primeiro Dataset',
                    data: [20, 10, 40, 5, 30],
                    fill: true,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)'
                }]
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    Charts.initialize();
});
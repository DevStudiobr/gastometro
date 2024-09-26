const ctx = document.getElementById('gastosChart').getContext('2d');
const gastosChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Zezo Aragão', 'Romuld'],
        datasets: [{
            label: 'Gasto Total (R$)',
            data: [141036.90, 51120.00],
            backgroundColor: ['#007bff', '#ff0000'],
            borderColor: ['#004080', '#800000'],
            borderWidth: 1
        }, {
            label: 'Limite de Gastos (R$)',
            data: [150000.00, 40400.00],
            backgroundColor: 'rgba(0, 123, 255, 0.5)', // Azul claro para limite
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Valor em R$'
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Comparação de Gastos dos Candidatos'
            }
        }
    }
});

// Função para filtrar candidatos por partido
document.getElementById('filter').addEventListener('change', function() {
    const selectedParty = this.value;
    const candidatos = document.querySelectorAll('.candidato');

    candidatos.forEach(candidato => {
        if (selectedParty === 'all' || candidato.dataset.party === selectedParty) {
            candidato.style.display = 'flex';
        } else {
            candidato.style.display = 'none';
        }
    });
});
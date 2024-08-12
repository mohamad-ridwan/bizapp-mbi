const bahanMentah = document.getElementById('bahanMentahChart');

const labels = ['Beras', 'Minyak', 'Sayur', 'Ikan', 'Gula', 'Garam']

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Maximum Value',
            data: [1000, 1000, 1000, 1000, 1000, 1000],
            barPercentage: 0.9,
            barThickness: 11,
            maxBarThickness: 11,
            // minBarLength: 0,
            borderSkipped: false,
            grouped: false,
            backgroundColor: 'rgba(215, 221, 255, 0.4)',
            borderWidth: 0,
        },
        {
            label: 'Total',
            data: [300, 500, 600, 300, 800, 900],
            barPercentage: 0.9,
            barThickness: 11,
            maxBarThickness: 11,
            // minBarLength: 0,
            borderSkipped: false,
            grouped: false,
            backgroundColor: '#804AF2',
            borderWidth: 0,
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        title: {
            display: false,
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                display: false,
                grid: {
                    display: false
                }
            },
            x: {
                stacked: true,
                grid: {
                    display: false
                },
                ticks:{
                    font: {
                        size: 9
                    }
                }
            },
        },
        elements: {
            bar: {
                borderRadius: 100
            }
        }
    },
};

new Chart(bahanMentah, config)
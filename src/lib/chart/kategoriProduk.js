const kategoriProduk = document.getElementById('kategoriProdukChart');

var xValues = ["Makanan", "Pakaian", "Gajet", "Buku", "Lain-lain", 'Tidak Dinyatakan'];
var yValues = [10, 8, 3, 1, 5, 9];
var barColors = [
    "#51258A",
    "#D8D6F5",
    "#B9B6EB",
    "#9C99DC",
    "#7D79B6",
    '#9747FF'
]

const config = {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            hoverOffset: 4,
            borderWidth: 0,
            weight: 1,
            spacing: 0
        }]
    },
    options: {
        title: {
            display: false,
            text: "World Wide Wine Production 2018"
        },
        layout: {
            padding: 0
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false
            }
        },
        elements: {
            doughnut: {
                borderWidth: 0
            }
        },
        aspectRatio: 1,
        cutout: '75%'
    }
}

new Chart(kategoriProduk, config);
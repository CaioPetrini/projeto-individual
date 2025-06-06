var nome = sessionStorage.NOME_USUARIO;

var nomeUsuario = document.getElementById("nome_input");
var nomeUsuario2 = document.getElementById("nome_input2");

nomeUsuario.innerHTML = `${nome}`;
nomeUsuario2.innerHTML = `${nome}`;

function logo_landing_page() {
        window.location.href = '../index.html'
    }   

const grafico1 = document.getElementById('myChart01');

data = {

        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [{
            label: 'Pontuação',
            backgroundColor: ' #6D54EE',
            borderColor: ' #6D54EE',
            data: [70, 47, 66, 75, 62, 65],
            borderWidth: 2,
            pointStyle: false
        },
        {
            label: 'Média',
            backgroundColor: ' #F8A720',
            borderColor: ' #F8A720',
            data: [60, 60, 60, 60, 60, 60],
            borderWidth: 2,
            pointStyle: false
        }]
    },

new Chart(grafico1, {
    type: 'line',
    data,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 100,
                beginAtZero: true,
                ticks: {
                    stepSize: 20
                  }
            },
            
        }
    }
});

const grafico2 = document.getElementById('myChart02');

new Chart(grafico2, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: ['Acima da média',
                'Abaixo da Média'],
            backgroundColor: [' #eb3434',
                ' #34eb71'],
            data: [20, 200],
            borderWidth: 1,
            pointStyle: false
        },]
    },
    options: {
        
    }
});

const grafico3 = document.getElementById('myChart03');

new Chart(grafico3, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6','7','8','9','10'],
        datasets: [{
            type: 'line',
            label: 'Média',
            backgroundColor: ' #F8A720',
            borderColor: ' #F8A720',
            data: [60, 60, 60, 60, 60, 60,60,60,60,60,60,60, 60, 60, 60],
            borderWidth: 2,
            pointStyle: false
        },
        {
            label: 'Pontuação',
            backgroundColor: ' #6D54EE',
            borderColor: ' #6D54EE',
            data: [24,55,30,45,65,55,26,40,85,40,10,55],
            borderWidth: 2,
            pointStyle: false
        }
        ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 100,
                beginAtZero: true,
                ticks: {
                    stepSize: 20
                  }
            },
            
        }
    }
});
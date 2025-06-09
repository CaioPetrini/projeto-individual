var idUsuario = sessionStorage.ID_USUARIO;

function obterPontuacoes(idUsuario) {
    fetch(`/tentativa/graficos/obterPontuacoes/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                plotarGrafico1(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

obterPontuacoes(idUsuario);

function plotarGrafico1(resposta) {
    const grafico1 = document.getElementById('myChart01');
    const lista_tentativas = [];
    const lista_pontos = [];
    const lista_media = [];

    for (let i = 1; i <= resposta.length; i++) {
        lista_tentativas.push('Tentativa ' + i);
    }

    for (let i = 0; i < resposta.length; i++) {
        lista_pontos.push(resposta[i].pontuacao);
    }

    for (let i = 0; i < resposta.length; i++) {
        lista_media.push(60);
    }

    data = {

        labels: lista_tentativas,
        datasets: [{
            label: 'Pontuação',
            backgroundColor: ' #6D54EE',
            borderColor: ' #6D54EE',
            data: lista_pontos,
            borderWidth: 2,
            pointStyle: true
        },
        {
            label: 'Média',
            backgroundColor: ' #F8A720',
            borderColor: ' #F8A720',
            data: lista_media,
            borderWidth: 2,
            pointStyle: true
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
}


function obterMedias(idUsuario) {
    fetch(`/tentativa/graficos/obterMedias/${idUsuario}`, { cache: 'no-store' }).then(function (response2) {
        if (response2.ok) {
            response2.json().then(function (resposta2) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta2)}`);
                plotarGrafico2(resposta2);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

obterMedias(idUsuario);

function plotarGrafico2(resposta2) {
    const grafico2 = document.getElementById('myChart02');

    new Chart(grafico2, {
        type: 'doughnut',
        data: {
            labels: ['Acima da Média', 'Abaixo da Média'],
            datasets: [{
                label: ['Acima da média', 'Abaixo da Média'],
                backgroundColor: ['#34eb71', '#eb3434'],
                data: [resposta2[0].AcimadaMédia, resposta2[0].AbaixodaMédia],
                borderWidth: 1,
                pointStyle: false
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    color: 'white',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

function obterDuracoes(idUsuario) {
    fetch(`/tentativa/graficos/obterDuracoes/${idUsuario}`, { cache: 'no-store' }).then(function (response3) {
        if (response3.ok) {
            response3.json().then(function (resposta3) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta3)}`);
                plotarGrafico3(resposta3);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

obterDuracoes(idUsuario);

function plotarGrafico3(resposta3) {
    const grafico3 = document.getElementById('myChart03');
    const lista_duracaoFinal = [];
    const lista_tentativas = [];
    const lista_duracao = [];

    if (resposta3.length < 1) {
        console.log('Realizar o quiz')
    } else if (resposta3.length <= 10) {
        for (var i = resposta3.length - 1; i >= 0; i--) {
            var duracaoFormatada = resposta3[i].duracao.split(':');
            var duracaoFinal = (Number(duracaoFormatada[1]) * 60) + Number(duracaoFormatada[2]);

            lista_duracaoFinal.push(duracaoFinal);
        }
    }

    for (let i = resposta3.length - 1; i >= 0; i--) {
        lista_tentativas.push('Tentativa ' + (i + 1));
    }

    for (let i = 0; i < resposta3.length; i++) {
        lista_duracao.push(resposta3[i].pontuacao);
    }

    new Chart(grafico3, {
        type: 'bar',
        data: {
            labels: lista_tentativas,
            datasets: [{
                label: 'Tempo',
                backgroundColor: 'rgb(255, 0, 221)',
                borderColor: ' rgb(255, 0, 221)',
                data: lista_duracaoFinal,
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
                    max: 180,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 60
                    }
                },

            }
        }
    });
}
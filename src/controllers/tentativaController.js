var temporizadorModel = require("../models/tentativaModel");

function listar(req, res) {
    carroModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function temporizar(req, res) {
    var temporizador = req.body.temporizador;

    if (temporizador == undefined) {
        res.status(400).send("Seu temporizador está undefined!");
    }

    temporizadorModel.temporizar(temporizador).then(function(resposta){
        res.status(200).send("Temporizador criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    temporizar
}
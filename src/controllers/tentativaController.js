var tentativaModel = require("../models/tentativaModel");

function obterPontuacaoMedia(req, res) {
    var idUsuario = req.params.idUsuario;
    tentativaModel.obterPontuacaoMedia(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function temporizar(req, res) {
    var idUsuario = req.body.idUsuario;
    var pontuacao = req.body.pontuacao;
    var duracao = req.body.duracao;

    if (!idUsuario || !pontuacao || !duracao) {
        return res.status(400).send("Dados inválidos ou undefined.");
    }

    tentativaModel.temporizar(idUsuario, pontuacao, duracao)
        .then(function (resposta) {
            res.status(200).send("Temporizador criado com sucesso");
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage || erro);
        });
}

function obterPontuacoes(req, res) {
    var idUsuario = req.params.idUsuario;
    tentativaModel.obterPontuacoes(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function obterDuracoes(req, res) {
    var idUsuario = req.params.idUsuario;
    tentativaModel.obterDuracoes(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function obterMedias(req, res) {
    var idUsuario = req.params.idUsuario;
    tentativaModel.obterMedias(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    obterPontuacaoMedia,
    temporizar,
    obterPontuacoes,
    obterDuracoes,
    obterMedias
}
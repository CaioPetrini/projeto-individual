var contadoresModel = require("../models/contadoresModel");

function listar(req, res) {
    contadoresModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function registrarAcesso(req, res) {
    var idMapa = req.body.idMapa;
    var idUsuario = req.body.idUsuario


    console.log("Recebido acesso ao mapa ID:", idMapa);

    if (!idMapa) {
        console.log("ID do mapa está indefinido!");
        res.status(400).send("ID do mapa está indefinido!");
        return;
    }

    contadoresModel.incrementarAcesso(idMapa, idUsuario).then(resultado => {
        console.log("Acesso registrado com sucesso!");
        res.status(200).json({ mensagem: "Acesso registrado com sucesso" });
    }).catch(erro => {
        console.error("Erro ao registrar acesso:", erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function kpiMapaMaisAcessado(req, res) {
    contadoresModel.obterMapaMaisAcessado().then(resultado => {
        res.status(200).json(resultado[0]);
    }).catch(erro => {
        console.error(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function kpiMapaMaisAcessadoUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    contadoresModel.obterMapaMaisAcessadoUsuario(idUsuario).then(resultado => {
        res.status(200).json(resultado[0]);
    }).catch(erro => {
        console.error(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

  function selectAllMapa(req, res){
    var id = req.params.idMapa
    contadoresModel.selectAllMapa(id)
    .then(function (resposta){
        res.status(200).json(resposta)
        console.log(resposta)
    })
  }

module.exports = {
    listar,
    selectAllMapa,
    registrarAcesso,
    kpiMapaMaisAcessado,
    kpiMapaMaisAcessadoUsuario
}
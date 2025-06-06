var express = require("express");
var router = express.Router();

var contadoresController = require("../controllers/contadoresController");

router.post("/UPDATE/:idMapa", function (req, res) {
    contadoresController.inserir(req, res);
});

router.get("/selectAllMapa", function (req, res) {
    // função a ser chamada quando acessar /contadores/listar
    contadoresController.selectAllMapa(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /contadores/listar
    contadoresController.listar(req, res);
});

router.post("/registrarAcesso", function (req, res) {
    contadoresController.registrarAcesso(req, res);
});

router.get("/kpi", function (req, res) {
    contadoresController.kpiMapaMaisAcessado(req, res);
});

router.get("/kpi2:idUsuario", function (req, res) {
    contadoresController.kpiMapaMaisAcessadoUsuario(req, res);
});

module.exports = router;
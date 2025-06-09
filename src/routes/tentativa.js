var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/criar", function (req, res) {
    tentativaController.temporizar(req, res);
});

router.get("/kpi3:idUsuario", function (req, res) {
    tentativaController.obterPontuacaoMedia(req, res);
});

router.get("/graficos/obterPontuacoes/:idUsuario", function (req, res) {
    tentativaController.obterPontuacoes(req, res);
});

router.get("/graficos/obterDuracoes/:idUsuario", function (req, res) {
    tentativaController.obterDuracoes(req, res);
});

router.get("/graficos/obterMedias/:idUsuario", function (req, res) {
    tentativaController.obterMedias(req, res);
});

module.exports = router;
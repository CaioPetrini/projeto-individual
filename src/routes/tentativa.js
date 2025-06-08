var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/criar", function (req, res) {
    tentativaController.temporizar(req, res);
});

router.get("/kpi3:idUsuario", function (req, res) {
    tentativaController.obterPontuacaoMedia(req, res);
});

module.exports = router;
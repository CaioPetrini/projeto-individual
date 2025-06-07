var express = require("express");
var router = express.Router();

var temporizadorController = require("../controllers/tentativaController");

router.post("/temporizar", function (req, res) {
    temporizadorController.temporizar(req, res);
});

router.get("/listar", function (req, res) {
    temporizadorController.listar(req, res);
});

module.exports = router;
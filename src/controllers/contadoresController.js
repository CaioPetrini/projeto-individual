var contadoresModel = require("../models/contadoresModel");

function listar(req, res) {
    contadoresModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

// function cadastrar(req, res) {
//     var nome = req.body.nome;

//     if (nome == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     }

//     contadoresModel.cadastrar(nome).then(function(resposta){
//         res.status(200).send("Carro criado com sucesso");
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
// }

function inserir(req, res) {
    var contadorPenhascos_uivantes = req.body.contadorPenhascos_uivantesServer;
    
    if (contadorPenhascos_uivantes == undefined) {
        res.status(400).send("O contador de Penhascos Uivantes não está funcionando");
    }
    
    contadoresModel.inserir(contadorPenhascos_uivantes).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function dirtmouth() 
{
    var contadorDirtmouth = 0;

    if (contadorDirtmouth == undefined) {
        res.status(400).send("O contador de Dirtmouth não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorDirtmouth).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function pico_de_cristal() {
    var contadorPico_de_cristal = 0;

    if (contadorPico_de_cristal == undefined) {
        res.status(400).send("O contador de Pico de Cristal não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorPico_de_cristal).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function caminho_verde() {
    var contadorCaminho_verde = 0;

    if (contadorCaminho_verde == undefined) {
        res.status(400).send("O contador de Caminho Verde não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorCaminho_verde).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function encruzilhada_esquecida() {
    var contadorEncruzilhada_esquecida = 0;

    if (contadorEncruzilhada_esquecida == undefined) {
        res.status(400).send("O contador de Encruzilhada Esquecida não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorEncruzilhada_esquecida).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function terra_do_descanso() {
    var contadorTerra_do_descanso = 0;

    if (contadorTerra_do_descanso == undefined) {
        res.status(400).send("O contador de Terra do Descanso não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorTerra_do_descanso).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function jardins_da_rainha() {
    var contadorJardins_da_rainha = 0;

    if (contadorJardins_da_rainha == undefined) {
        res.status(400).send("O contador de Jardins da Rainha não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorJardins_da_rainha).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function canion_da_nevoa() {
    var contadorCanion_da_nevoa = 0;

    if (contadorCanion_da_nevoa == undefined) {
        res.status(400).send("O contador de Cânion da Névoa não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorCanion_da_nevoa).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function ermos_fungicos() {
    var contadorErmos_fungicos;

    if (contadorErmos_fungicos == undefined) {
        res.status(400).send("O contador de Ermos Fúngicos não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorErmos_fungicos).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function cidade_das_lagrimas() {
    var contadorCidade_das_lagrimas = 0;

    if (contadorCidade_das_lagrimas == undefined) {
        res.status(400).send("O contador de Cidade das Lágrimas não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorCidade_das_lagrimas).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function borda_do_reino() {
    var contadorBorda_do_reino = 0;

    if (contadorBorda_do_reino == undefined) {
        res.status(400).send("O contador de Borda do Reino não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorBorda_do_reino).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function ninho_profundo() {
    var contadorNinho_profundo = 0;

    if (contadorNinho_profundo == undefined) {
        res.status(400).send("O contador de Ninho Profundo não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorNinho_profundo).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function hidrovia_real() {
    var contadorHidrovia_real = 0;

    if (contadorHidrovia_real == undefined) {
        res.status(400).send("O contador de Hidrovia Real não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorHidrovia_real).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function a_colmeia() {
    var contadorA_colmeia = 0;

    if (contadorA_colmeia == undefined) {
        res.status(400).send("O contador de A Colméia não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorA_colmeia).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
  }

  function bacia_antiga() {
    var contadorBacia_antiga = 0;

    if (contadorBacia_antiga == undefined) {
        res.status(400).send("O contador de Bacia Antiga não está funcionando");
    }
    
    contadoresModel.cadastrar(contadorBacia_antiga).then(function(resposta){
        res.status(200).send("Contador está funcionando corretamente");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
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
    dirtmouth,
    pico_de_cristal,
    caminho_verde,
    encruzilhada_esquecida,
    terra_do_descanso,
    jardins_da_rainha,
    canion_da_nevoa,
    ermos_fungicos,
    cidade_das_lagrimas,
    borda_do_reino,
    ninho_profundo,
    hidrovia_real,
    a_colmeia,
    bacia_antiga,
    inserir,
    selectAllMapa
}
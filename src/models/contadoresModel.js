var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM carro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrar(nome) {
    var instrucao = `
        INSERT INTO carro (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserir(contadorPenhascos_uivantes) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES (${contadorPenhascos_uivantes});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dirtmouth(contadorDirtmouth) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorDirtmouth}') WHERE idMapa = 2;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pico_de_cristal(contadorPico_de_cristal) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorPico_de_cristal}') WHERE idMapa = 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function caminho_verde(contadorCaminho_verde) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorCaminho_verde}') WHERE idMapa = 4;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function encruzilhada_esquecida(contadorEncruzilhada_esquecida) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorEncruzilhada_esquecida}') WHERE idMapa = 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function terra_do_descanso(contadorTerra_do_descanso) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorTerra_do_descanso}') WHERE idMapa = 6;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function jardins_da_rainha(contadorJardins_da_rainha) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorJardins_da_rainha}') WHERE idMapa = 7;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function canion_da_nevoa(contadorCanion_da_nevoa) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorCanion_da_nevoa}') WHERE idMapa = 8;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ermos_fungicos(contadorErmos_fungicos) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorErmos_fungicos}') WHERE idMapa = 9;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cidade_das_lagrimas(contadorCidade_das_lagrimas) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorCidade_das_lagrimas}') WHERE idMapa = 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function borda_do_reino(contadorBorda_do_reino) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorBorda_do_reino}') WHERE idMapa = 11;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ninho_profundo(contadorNinho_profundo) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorNinho_profundo}') WHERE idMapa = 12;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function hidrovia_real(contadorHidrovia_real) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorHidrovia_real}') WHERE idMapa = 13;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function a_colmeia(contadorA_colmeia) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorA_colmeia}') WHERE idMapa = 14;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function bacia_antiga(contadorBacia_antiga) {
    var instrucao = `
        INSERT INTO mapa (contadorAcessos) VALUES ('${contadorBacia_antiga}') WHERE idMapa = 15;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function SELECTCONT(){
     var instrucao = `
        SELECT contadorAcesso FROM mapa WHERE idMapa = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function selectAllMapa(){
     var instrucao = `
        SELECT idMapa as id, contadorAcessos as acessos FROM mapa;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}


module.exports = {
    listar,
    //penhascos_uivantes,
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
};
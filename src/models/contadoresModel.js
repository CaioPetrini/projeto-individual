var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM carro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function incrementarAcesso(idMapa, idUsuario) {
    var instrucao = `
        UPDATE mapa SET contadorAcessos = contadorAcessos + 1 WHERE idMapa = ${idMapa} AND fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL:\n" + instrucao);
    return database.executar(instrucao);
}

function obterMapaMaisAcessado() {
    var instrucao = `
        SELECT nome, contadorAcessos, TRUNCATE((contadorAcessos / (SELECT SUM(contadorAcessos) FROM mapa)) * 100, 0) AS percentual FROM mapa ORDER BY contadorAcessos DESC LIMIT 1;
    `;
    return database.executar(instrucao);
}

function obterMapaMaisAcessadoUsuario() {
    var instrucao = `
        SELECT u.nome, m.nome, m.contadorAcessos, TRUNCATE((SELECT (COUNT(contadorAcessos)) * 100 / COUNT(contadorAcessos) FROM mapa WHERE idUsuario = 1), 0) AS percentual FROM mapa AS m JOIN area AS a ON a.fkMapa = m.idMapa JOIN usuario AS u ON fkUsuarioMapa = u.idUsuario GROUP BY u.idUsuario, m.nome, m.contadorAcessos ORDER BY m.contadorAcessos DESC LIMIT 1;
    `;
    return database.executar(instrucao);
}

function selectAllMapa() {
    var instrucao = `
        SELECT idMapa as id, contadorAcessos as acessos FROM mapa;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}


module.exports = {
    listar,
    selectAllMapa,
    incrementarAcesso,
    obterMapaMaisAcessado,
    obterMapaMaisAcessadoUsuario
};
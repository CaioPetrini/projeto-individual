var database = require("../database/config")

function obterPontuacaoMedia(idUsuario) {
    var instrucao = `
        SELECT nome, CONCAT(TRUNCATE(AVG(pontuacao), 0), '%') AS Média FROM usuario JOIN tentativa ON fkUsuarioTentativa = idUsuario WHERE idUsuario = ${idUsuario} GROUP BY idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function temporizar(idUsuario, pontuacao, duracao) {
    const instrucao = `
        INSERT INTO tentativa (fkUsuarioTentativa, pontuacao, duracao) VALUES (${idUsuario}, ${pontuacao}, '${duracao}');
    `;
    return database.executar(instrucao);
}

function obterPontuacoes(idUsuario) {
    var instrucao = `
        SELECT nome, idTentativa, pontuacao FROM usuario JOIN tentativa ON fkUsuarioTentativa = idUsuario WHERE idUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function obterDuracoes(idUsuario) {
    var instrucao = `
        SELECT nome, idTentativa, duracao FROM usuario JOIN tentativa ON fkUsuarioTentativa = idUsuario WHERE idUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function obterMedias(idUsuario) {
    var instrucao = `
        SELECT COUNT(idTentativa) AS AcimadaMédia, ((SELECT COUNT(idTentativa) FROM tentativa) - COUNT(idTentativa)) AS AbaixodaMédia FROM tentativa WHERE pontuacao >= 60;
    `;
    return database.executar(instrucao);
}

module.exports = {
    temporizar,
    obterPontuacaoMedia,
    obterPontuacoes,
    obterDuracoes,
    obterMedias
};
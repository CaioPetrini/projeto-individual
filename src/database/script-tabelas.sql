CREATE DATABASE hollow_guide;

USE hollow_guide;

CREATE TABLE mapa (
idMapa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
contadorAcessos INT DEFAULT 0
);

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY auto_increment,
    nome VARCHAR(45),
    email VARCHAR(99),
    senha VARCHAR(45)
);

CREATE TABLE area (
idArea INT AUTO_INCREMENT,
fkUsuarioMapa INT,
	CONSTRAINT fkUsuarioMapa FOREIGN KEY (fkUsuarioMapa) REFERENCES usuario(idUsuario),
fkMapa INT,
	CONSTRAINT fkMapa FOREIGN KEY (fkMapa) REFERENCES mapa(idMapa),
contadorAcessosUsuario INT DEFAULT 0,
	CONSTRAINT pkComposta PRIMARY KEY (idArea, fkUsuarioMapa, fkMapa)
);

CREATE TABLE tentativa (
idTentativa INT AUTO_INCREMENT,
fkUsuarioTentativa INT,
	CONSTRAINT pkComposta2 PRIMARY KEY (idTentativa, fkUsuarioTentativa),
pontuacao INT,
duracao TIME
);

-- Inserindo todas os mapas
INSERT INTO mapa (nome) VALUES
	('Penhascos Uivantes'),
	('Dirtmouth'),
	('Pico de Cristal'),
	('Caminho Verde'),
	('Encruzilhada Esquecida'),
	('Terra do Descanso'),
	('Jardins da Rainha'),
	('Cânion da Névoa'),
	('Ermos Fúngicos'),
	('Cidade das Lágrimas'),
    ('Borda do Reino'),
    ('Ninho Profundo'),
    ('Hidrovia Real'),
    ('A Colméia'),
    ('Bacia Antiga');
    
-- KPI 1 (Percentual do mapa mais acessado entre todos os usuários)
SELECT nome, contadorAcessos,
	TRUNCATE((contadorAcessos / (SELECT SUM(contadorAcessos) FROM mapa)) * 100, 0) AS percentual
FROM mapa ORDER BY contadorAcessos DESC LIMIT 1;

-- KPI 2 (Percentual do mapa mais acessado de um usuário específico)
SELECT u.nome AS Usuário,
m.nome AS Mapa,
	CONCAT(ROUND(a.contadorAcessosUsuario * 100 / (SELECT SUM(ae.contadorAcessosUsuario) FROM area ae
	WHERE ae.fkUsuarioMapa = u.idUsuario), 0),'%') AS porcentagem
FROM usuario u JOIN area a
	ON u.idUsuario = a.fkUsuarioMapa JOIN mapa m
    ON a.fkMapa = m.idMapa
	WHERE u.idUsuario = 1
	ORDER BY a.contadorAcessosUsuario DESC LIMIT 1;
    
-- KPI 3 (Média de pontuação do usuário)
SELECT nome, CONCAT(TRUNCATE(AVG(pontuacao), 0), '%') FROM usuario JOIN tentativa
	ON fkUsuarioTentativa = idUsuario
    WHERE idUsuario = 1
	GROUP BY idUsuario, nome;
    
-- Gráfico 1 (Pontuação por tentativa)
SELECT nome, idTentativa, pontuacao FROM usuario JOIN tentativa ON fkUsuarioTentativa = idUsuario
	WHERE idUsuario = 1;

-- Gráfico 2 (Tentativas que foram acima e abaixo da média)
SELECT COUNT(idTentativa) AS AcimadaMédia, ((SELECT COUNT(idTentativa) FROM tentativa) - COUNT(idTentativa)) AS AbaixodaMédia
	FROM tentativa WHERE pontuacao >= 60;

-- Gráfico 3 (Tempo por tentativa)
SELECT nome, idTentativa, duracao FROM usuario JOIN tentativa ON fkUsuarioTentativa = idUsuario
	WHERE idUsuario = 1;
    
-- Gráfico 2 (Tabela de Líderes)
-- SELECT nome, MAX(pontuacao) FROM usuario JOIN tentativa ON fkUsuarioTentativa = idUsuario GROUP BY idUsuario, pontuacao ORDER BY pontuacao DESC LIMIT 10;
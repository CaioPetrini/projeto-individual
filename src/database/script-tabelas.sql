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
dataAcesso DATETIME,
	CONSTRAINT pkComposta PRIMARY KEY (idArea, fkUsuarioMapa, fkMapa)
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
    
SELECT * FROM mapa;
SELECT * FROM usuario;
SELECT * FROM area;

INSERT INTO area (fkUsuarioMapa, fkMapa) VALUES
	(1, 1),
	(1, 1),
	(1, 1),
	(1, 1),
	(1, 2),
	(1, 2),
	(1, 3),
	(1, 4);

-- KPI (Percentual do mapa mais acessado entre todos os usuários)
SELECT nome, contadorAcessos,
	TRUNCATE((contadorAcessos / (SELECT SUM(contadorAcessos) FROM mapa)) * 100, 0) AS percentual
FROM mapa ORDER BY contadorAcessos DESC LIMIT 1;

-- KPI (Percentual do mapa mais acessado de um usuário específico)
SELECT u.nome, m.nome, m.contadorAcessos,
	TRUNCATE((SELECT (COUNT(contadorAcessos)) * 100 / COUNT(contadorAcessos) FROM mapa WHERE idUsuario = 1), 0) AS percentual
FROM mapa AS m
	JOIN area AS a
		ON a.fkMapa = m.idMapa
	JOIN usuario AS u
		ON fkUsuarioMapa = u.idUsuario
        GROUP BY u.idUsuario, m.nome, m.contadorAcessos
    ORDER BY m.contadorAcessos DESC LIMIT 1;
-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

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

-- KPI (Percentual do mapa mais acessado entre todos os usuários)
SELECT
	TRUNCATE(MAX(contadorAcessos) / SUM(contadorAcessos) * 100, 0) AS 'Percentual do mapa mais acessado'
FROM mapa;
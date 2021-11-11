CREATE DATABASE SPOTIFY;
CREATE TABLE usuario(
    id_usuario 	INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nomeusuario	VARCHAR(45),
    data_nasc	DATE,
    sexo		VARCHAR(1),
    email 		VARCHAR(150),
    senha 		VARCHAR(45)
);
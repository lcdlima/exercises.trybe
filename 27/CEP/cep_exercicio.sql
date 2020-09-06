CREATE DATABASE IF NOT EXISTS cep_exercicio;

USE cep_exercicio;

CREATE TABLE cep (
id INT NOT NULL AUTO_INCREMENT,
cep CHAR(8) NOT NULL,
uf CHAR(2) NOT NULL,
cidade VARCHAR(40) NOT NULL,
bairro VARCHAR(40) NOT NULL,
logradouro VARCHAR(100),
PRIMARY KEY (id)
);
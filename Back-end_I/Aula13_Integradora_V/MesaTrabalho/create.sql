create table if not exists pacientes (id INT auto_increment PRIMARY KEY, nome varchar(255), sobrenome varchar(255), rg varchar(255), datadecadastro varchar(255));
create table if not exists endereco (id INT auto_increment PRIMARY KEY, rua varchar(255),numero int, cidade varchar(255),bairro varchar(255),idpaciente int);



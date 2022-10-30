# Grupo 7 - Mateus Praxedes, Michel Nunes, Vinicius Evandro, Pablo Gonçalves, Mateus Afonso

select * from FATURAS;

SELECT * , MAX(valor_total) FROM FATURAS WHERE cidade_cobranca = "Oslo";

select *, min(valor_total) FROM FATURAS;

select avg(valor_total) from FATURAS where pais_cobranca = "Canada";

select  count(*) from faturas where pais_cobranca = "Canada";

select sum(valor_total) from faturas;

select id,data_fatura,valor_total from faturas where valor_total < (select avg(valor_total) from faturas);

select * from empregados;

select *, max(data_nascimento) from empregados;

select id, nome, sobrenome, min(data_nascimento) from empregados;

SELECT DATE_FORMAT(data_nascimento,"%d %M %Y") from empregados;

select * from cancoes;

select count(*) from cancoes where compositor = "AC/DC";

SELECT AVG(duracao_milisegundos) from cancoes;

select avg(bytes) from cancoes where compositor = "AC/DC";

select * from clientes order by email;

select count(*) from clientes where cidade = "São Paulo";

select count(*) from clientes where cidade = "Paris";

select count(*) from clientes where email like "%yahoo%";

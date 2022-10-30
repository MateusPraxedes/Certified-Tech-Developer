#Matheus Barreto, Bruno Neves, Juliane Lima, Mateus Praxedes, pedro Oliveira, Rafael Vasconscelos, Wellington siqueira, Gabriela Lima

DELIMITER $$ 
CREATE PROCEDURE sp_nome_Proc(IN idcategoria INT, IN newDescricao longtext) 
BEGIN 
#regra que o exercicio pedi 

END $$ 
DELIMITER ; 

#DROP PROCEDURE SP_Empregados;
DELIMITER $$ 
CREATE PROCEDURE SP_Empregados () 
BEGIN 
	SELECT p.Nome, p.Sobrenome 
		FROM Empregados p 
        ORDER BY p.nome, p.Sobrenome ASC; 
END $$ 
DELIMITER ;

CALL SP_Empregados (); 

DELIMITER $$ 
CREATE PROCEDURE SP_EmpregadosCidade (IN cidade VARCHAR(100)) 
BEGIN 
	SELECT p.Cidade, p.Nome, p.Sobrenome 
		FROM Empregados p 
        WHERE p.Cidade = cidade
        ORDER BY p.nome, p.Sobrenome ASC;
END $$ 
DELIMITER ;

CALL SP_EmpregadosCidade ("Seattle"); 

DROP PROCEDURE IF EXISTS SP_ContagemClientes;
DELIMITER $$ 
CREATE PROCEDURE SP_ContagemClientes (IN paisIn VARCHAR(15)) 
BEGIN 
	SELECT COUNT(*)
		FROM Clientes 
        WHERE Pais = paisIn;
END $$ 
DELIMITER ;

CALL SP_ContagemClientes ('Portugal');

-- 4 a) Crie uma SP que receba um número e liste os produtos cujo estoque 
-- está abaixo desse número. O resultado deve mostrar o nome do 
-- produto, o Estoque atual e o nome da categoria à qual o produto pertence.

DELIMITER $$

CREATE PROCEDURE sp_lista_estoque(IN qnt INT)
BEGIN

SELECT ProdutoNome as 'Nome Produto', 
UnidadesEstoque as 'Quantidade',
c.categoriaNome as 'Categoria' FROM Produtos p
INNER JOIN Categorias c
On p.CategoriaID = c.CategoriaID
WHERE UnidadesEstoque < qnt;

END $$
DELIMITER ;

-- 4 b)Liste os produtos com menos de 10 unidades no estoque;
CALL sp_lista_estoque(9);

-- 4 c)Liste os produtos sem estoque.
CALL sp_lista_estoque(1);

#5
DROP PROCEDURE IF EXISTS sp_lista_desconto;
DELIMITER $$

CREATE PROCEDURE sp_lista_desconto(IN descontoPesquisa INT)
BEGIN

SELECT p.ProdutoNome, c.Empresa, CONCAT(RPAD(CONCAT(ROUND((d.Desconto*100),3), "."), 4, "0"), "%") as Desconto
	FROM Faturas as f
    INNER JOIN DetalheFatura as d
    ON f.FaturaId = d.FaturaId
    INNER JOIN Produtos as p
    on d.ProdutoID = p.ProdutoID
    INNER JOIN Clientes as c
    ON f.ClienteID = c.ClienteID
    WHERE d.Desconto >= (descontoPesquisa/100);

END $$
DELIMITER ;

CALL sp_lista_desconto(5);

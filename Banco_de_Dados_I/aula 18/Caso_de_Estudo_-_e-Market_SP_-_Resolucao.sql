DELIMITER $$
-- ****************************** Stored Procedures - e-Market ******************************
-- 1) Empregados
-- a) Crie uma SP que liste os sobrenomes e nomes dos empregados ordenados alfabeticamente.
DROP PROCEDURE IF EXISTS sp_listar_empregados;
DELIMITER $$
CREATE PROCEDURE sp_listar_empregados()
BEGIN	
     SELECT Sobrenome, Nome 
		FROM empregados 
	 order by Sobrenome;
END $$
DELIMITER ;
-- b) Invoque a SP para verificar o resultado.
CALL sp_listar_empregados();

-- 2) Empregados por cidade
-- a) Crie uma SP que leva o nome de uma cidade e lista os funcionários dessa cidade;
DROP PROCEDURE IF EXISTS sp_listar_cidade_empregado;
DELIMITER $$
CREATE PROCEDURE sp_listar_cidade_x_empregado(IN nome_cidade VARCHAR(30))
BEGIN	
     SELECT cidade, 
            sobrenome, 
            nome 
		FROM empregados 
	  WHERE Cidade = nome_cidade;
END $$
DELIMITER ;
-- b) Invoque a SP para listar os empregados de Seattle ou London.
CALL sp_listar_cidade_x_empregado('Seattle');

-- 3) Clientes por país
-- a) Crie uma SP que recebe o nome de um país e retorne o número de clientes naquele país.
DROP PROCEDURE IF EXISTS sp_contar_cliente_x_pais;
DELIMITER $$
CREATE PROCEDURE sp_contar_cliente_x_pais(IN nome_pais VARCHAR(30), OUT qtd_pais INT)
BEGIN	
     SELECT count(ClienteId) INTO qtd_pais 
		FROM clientes 
	 WHERE Pais = nome_pais; 
END $$
DELIMITER ;
-- b) Invoque a SP para consultar a quantidade de clientes de Portugal ou USA.
CALL sp_contar_cliente_x_pais('USA',@quantidade);
SELECT @quantidade;

-- 4) Produtos sem estoque
-- a) Crie uma SP que receba um número e liste os produtos cujo estoque está abaixo desse número. 
-- O resultado deve mostrar o nome do produto, o Estoque atual e o nome da categoria à qual o produto pertence.

DROP PROCEDURE IF EXISTS sp_listar_producto_x_stock;
DELIMITER $$
CREATE PROCEDURE sp_listar_producto_x_stock(IN numero INT)
BEGIN	
     SELECT p.produtonome, 
			p.unidadesestoque, 
            c.categorianome 
		FROM produtos AS p
     INNER JOIN categorias AS c 
        ON c.CategoriaID = p.CategoriaID
      WHERE p.unidadesestoque < numero;
      
END $$
DELIMITER ;
-- b) Liste os produtos com menos de 10 unidades no estoque;
CALL sp_listar_producto_x_stock(10);
-- c) Listar os produtos sem estoque.
CALL sp_listar_producto_x_stock(1);

-- 5) Vendas com desconto
-- a) Crie uma SP que receba uma porcentagem e lista os nomes dos produtos que foram vendidos com desconto igual ou superior ao valor indicado, 
-- indicando, também,  o nome do cliente a quem foi vendido.
DROP PROCEDURE IF EXISTS sp_listar_produto_x_porcentagem;

DELIMITER $$
CREATE PROCEDURE sp_listar_produto_x_porcentagem(IN porcentagem INT)
BEGIN
	SELECT p.ProdutoNome,
		   df.Desconto, 
           c.Empresa, 
           (df.PrecoUnitario / 100 * porcentagem) AS Porcentagem 
		FROM faturas AS f
	INNER JOIN clientes AS c 
      ON c.ClienteID= f.ClienteID
	INNER JOIN detalhefatura AS df 
       ON df.FaturaID = f.FaturaID
	INNER JOIN produtos AS p 
       ON p.ProdutoId= df.ProdutoId
	WHERE df.Desconto >= (df.PrecoUnitario / 100 * porcentagem);
END $$
DELIMITER ;
-- b) Liste as informações dos produtos que foram vendidos com um desconto superior a 10%.

CALL sp_listar_produto_x_porcentagem(1);

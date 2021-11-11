/*Nome: Cristiano Antonio Dewes,
	Michel Nunes,
    Mateus Praxedes,
    Lucas Gabriel,
    Moises Bollela,
    Rafael Queiroz
*/
USE emarket;

SELECT a.Contato, a.Telefone, a.Endereco, COUNT(*), MIN(b.DataFatura) AS dataFinal, MAX(b.DataFatura) AS data_Inicial
	FROM clientes		a
    INNER JOIN faturas	b
ON a.ClienteID = b.ClienteID
WHERE b.DataFatura BETWEEN "1996-01-01" AND "1996-12-31"
GROUP BY a.ClienteID;



SELECT LPAD(b.FaturaId,8,'0') AS FaturaID, DATE_FORMAT (b.DataFatura, '%Y-%m-%d') AS dataFatura, a.Cidade
	FROM clientes		a
    INNER JOIN	faturas b
ON a.ClienteID=b.ClienteID
WHERE a.Pais = "UK" AND b.CidadeEnvio != a.Cidade;

SELECT b.Empresa, b.Telefone, b.CorreioID, SUM(a.Transporte) AS "valor total"
	FROM faturas a
    INNER JOIN correios b
ON a.FormaEnvio = b.CorreioID
GROUP BY b.CorreioID ;

SELECT a.ProdutoNome, c.CategoriaNome
	FROM produtos 			 a
    INNER JOIN detalhefatura b
ON a.ProdutoID = b.ProdutoID
    INNER JOIN categorias 	 c
ON a.CategoriaID = c.CategoriaID
GROUP BY a.ProdutoID;

SELECT a.FaturaId, a.DataFatura, c.Empresa, b.Contato AS Cliente, 
		f.CategoriaNome, e.ProdutoNome, e.PrecoUnitario,
        d.Quantidade
	FROM faturas 		a
	INNER JOIN clientes b
ON a.ClienteID =b.ClienteID
	INNER JOIN correios c
ON a.FormaEnvio = c.CorreioID
	INNER JOIN detalhefatura d
ON a.FaturaId = d.FaturaId
	INNER JOIN produtos e
ON d.ProdutoID = e.ProdutoID
	INNER JOIN categorias f
ON e.CategoriaID = f.CategoriaID;
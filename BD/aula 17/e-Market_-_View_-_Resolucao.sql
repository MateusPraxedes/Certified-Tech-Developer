-- Crie uma View com os seguintes dados do cliente: Id, contato, Faz e o telefone.
-- Espera-se uma saída similar a:
CREATE VIEW v_clientes AS
SELECT ClienteID, Contato, Fax, Telefone
FROM clientes;

-- Liste os números de telefone dos clientes que não possuem fax. Faça isso de duas maneiras diferentes:

-- 1) Consultando a tabela clientes
SELECT Contato, Telefone FROM clientes
WHERE FAX = '';

-- 2) Consultando a visão do cliente
SELECT Contato, telefone_fax FROM v_clientes
WHERE telefone_fax LIKE 'TEL:%';


-- Crie uma visão com os seguintes dados do fornecedor: Id, contato, empresa e endereço. Para o endereço, pegue o endereço, cidade, código postal e país.

CREATE VIEW v_fornecedores AS
SELECT FornecedorID, Contato, Empresa,
CONCAT(Endereco, ' - ', Cidade, ' (', CodigoPostal,') ', Pais) as Endereço
FROM fornecedores
;

-- Liste os fornecedores que moram na Avenida das Americanas, no Brasil. Faça de duas formas diferentes:
-- 1) Consultando a tabela de fornecedores
SELECT FornecedorID, Contato, Empresa, Endereco, Pais
FROM fornecedores
WHERE Endereco LIKE '%Americanas%' AND Pais = 'Brazil'

-- 2)Consultando a visão do fornecedor
SELECT FornecedorID, Contato, Endereço
FROM v_fornecedores
WHERE Endereço LIKE '%Americanas%Brazil';


-- Crie uma visão dos produtos que será usada ​​para controle de estoque. Inclua o id e nome do produto, preço unitário arredondado sem decimais, unidades
-- em estoque e as unidades encomendadas. Inclua também uma nova coluna PRIORITY com os seguintes valores:
-- BAIXA se as unidades encomendadas forem zero
-- MEDIA se as unidades pedidas forem menores do que as unidades em estoque
-- URGENTE se as unidades pedidas não dobrarem o número de unidades em estoque
-- PRIORITÁRIO caso contrário
CREATE VIEW v_controle_estoque AS
SELECT
	ProdutoID,
	ProdutoNome,
	ROUND(PrecoUnitario) as PrecoUnitario,
	UnidadesEstoque,
	UnidadesPedidas,
	CASE WHEN UnidadesPedidas = 0 THEN 'BAIXA'
		WHEN UnidadesPedidas < UnidadesEstoque THEN 'MEDIA'
		WHEN UnidadesPedidas < 2*UnidadesEstoque THEN 'URGENTE'
	ELSE 'PRIORITÁRIO'
	END AS Prioridade
FROM produtos;


-- É necessário um relatório para identificar problemas de estoque. Utilizando a visão criada no exercício anterior, indique, para cada prioridade, quantos produtos existem e seu preço médio. Não inclua prioridades para as que possuem menos de 5 produtos.
SELECT Prioridade, count(*) AS quantidade_de_produtos,
AVG(PrecoUnitario) AS preco_medio
FROM v_controle_estoque 
GROUP BY Prioridade
HAVING count(*)>5


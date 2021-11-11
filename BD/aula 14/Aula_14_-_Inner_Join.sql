#Matheus Barreto, Mateus Praxedes, Rafael Queiroz, Lucas Casasco, Marcus Rodrigues, Rogério Silva

SELECT nome, titulo
	FROM artistas
    INNER JOIN albuns
    ON artistas.id = albuns.id_artista
    ORDER BY artistas.id;

SELECT nome, faturas.id as fatura, valor_total
	FROM clientes
    INNER JOIN faturas
    ON clientes.id = faturas.id_cliente
    WHERE valor_total > 5
    ORDER BY valor_total desc;
    
SELECT a.nome, b.nome
		FROM cancoes as a
        INNER JOIN tipos_de_arquivo as b
        ON a.id_tipo_de_arquivo = b.id
        ORDER BY a.id;
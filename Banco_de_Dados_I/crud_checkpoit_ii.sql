   INSERT INTO cliente(id_cliente,nome,cpf,logradouro,complemento,bairro,cidade,estado,cep)
	VALUES (1,'JOÃO SILVA','123.456.789-10','rua pamplona','ap 30','bela vista','São Pualo','São Pualo','01405100');
   
INSERT INTO cliente(id_cliente,nome,cpf,logradouro,complemento,bairro,cidade,estado,cep)
	VALUES (2,'FELIPE LUIZ','345.168.289-56','Rua Augusta','ap 35','consolação','São Pualo','São Pualo','013040010');
   
  SELECT nome,cpf,estado
  FROM cliente;
   
  UPDATE cliente SET nome = "BRUNO ALVES"
  WHERE id_cliente = 1;
   
  DELETE FROM cliente 
  WHERE  id_cliente = 2;
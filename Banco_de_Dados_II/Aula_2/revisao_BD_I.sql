USE adventureworks;

/* Enunciado
Abaixo você encontrará uma série de exercícios para praticar: */

#WHERE

#1. Mostre as pessoas  cuja segunda letra do sobrenome é “a”.
#Tabela: Contact 
#Campos:FirstName, MiddleName e  LastName

/*SELECT contact.FirstName
	  ,contact.MiddleName
      ,contact.LastName
FROM adventureworks.contact
WHERE SUBSTRING(contact.LastName, 2, 1) = 'a'; */

/* 2. Mostre o título e o nome concatenado com o sobrenome das pessoas que têm como "Títle" os valores "Mr." e “Ms”
Tabela: Contact 
Campos: Title, FirstName, LastName */

/*SELECT contact.Title
	  ,CONCAT(contact.FirstName, ' ', contact.LastName) AS FullName
  FROM adventureworks.contact
 WHERE contact.Title IN ('Mr.', 'Ms.'); */
 
 /* 3. Mostre os nomes  e o nr. de série dos produtos cujo número  do produto começa com “AR” ou “BE” ou “DC”.
Tabela: Product 
Campos: Name, ProductNumber */

/* SELECT product.Name
       ,product.ProductNumber
FROM adventureworks.product
WHERE LEFT(product.ProductNumber, 2) IN ('AR', 'BE', 'DC'); */

/* 4. Mostrar pessoas cujos nomes têm um C como o primeiro caractere e o segundo caractere não é "O" nem "E".
Tabela: Contact 
Campos: ContactID, FirstName, LastName */

/* SELECT contact.ContactID
      ,contact.FirstName
      ,contact.LastName
FROM adventureworks.contact
WHERE contact.FirstName LIKE 'C%' AND SUBSTRING(contact.FirstName, 2, 1) NOT IN ('O', 'E'); */


/* 5. Mostre todos os produtos cujo preço de tabela está entre 400 e 500 
Tabela: Product 
Campos: Name, ListPrice */

/*SELECT contact.ContactID, contact.FirstName, contact.LastName
FROM adventureworks.contact
WHERE contact.FirstName LIKE 'C%' AND SUBSTRING(contact.FirstName, 2, 1) NOT IN ('O', 'E'); */

/* 6. Mostre todos os funcionários que nasceram entre 1960 e 1980 e cujos anos de nascimento sejam pares.
Tabela: Employee 
Campos: EmployeeID, ContactID, Title, BirthDate */

/* SELECT employee.EmployeeID
      ,employee.ContactID
      ,employee.Title
      ,employee.BirthDate
FROM adventureworks.employee
WHERE YEAR(employee.BirthDate) BETWEEN 1960 AND 1980
  AND YEAR(employee.BirthDate) % 2 = 0; */
  
 # Operadores & joins
 
/* 1.	Mostre o código, data de entrada e horas de férias dos funcionários que entraram a partir do ano 2000.
Tabela: Employee 
Campos: EmployeeID,  Title, HireDate, VacationHours */

/* SELECT employee.EmployeeID
      ,employee.HireDate
      ,employee.VacationHours
FROM adventureworks.employee
WHERE YEAR(HireDate) >= 2000; */

/* 2.	Mostre o nome, número do produto, preço de tabela e o preço de tabela acrescido de 10% dos produtos ccomo uja data final de venda seja anterior a hoje.
Tabela: Product 
Campos: Name, ProductNumber, ListPrice, SellEndDate */

/* SELECT product.Name, product.ProductNumber, product.ListPrice, (product.ListPrice * 1.1) AS UpdatedListPrice
FROM adventureworks.product
WHERE product.SellEndDate < CURDATE(); */






 
  
  







 
 
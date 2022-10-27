# ⚡ Atividades de Fixação & Exercícios | Bloco 21 - Dia 02 (Seção 03)

## ✅ Atividades de Fixação | Como utilizar o INNER JOIN
1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas `actor` e `film_actor`.
```
SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor as a
INNER JOIN sakila.film_actor as f
ON a.actor_id = f.actor_id;
```

2. Use o `JOIN` para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas `staff` e `address`.
```
SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;
```

3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas `customer` e `address`.
```
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
```

4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas `address` e `customer`.
```
SELECT c.first_name, c.email, a.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND first_name LIKE '%rene%';
```

5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela `address` e `customer`.
```
SELECT c.first_name, COUNT(a.address_id) AS address_qty
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;
```

6. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas `payment` e `staff`. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
```
SELECT 
	s.first_name, s.last_name, ROUND(AVG(p.amount), 2) AS avg_amount
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY s.first_name, s.last_name;
```

7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas `actor`, `film_actor` e `film`.
```
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f
ON fa.film_id = f.film_id;
```

## ✅ Atividades de Fixação | O que é SELF JOIN e quando utilizá-lo
1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (`manager`) cujos departamentos (`department`) são diferentes.
```
SELECT
  CONCAT(employee.first_name, " ", employee.last_name) AS employee_name,
  CONCAT(manager.first_name, " ", manager.last_name) AS manager_name
FROM hr.employees AS employee
INNER JOIN hr.employees AS manager
ON employee.manager_id = manager.employee_id
WHERE employee.department_id <> manager.department_id;
```

2. Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
```
SELECT
  CONCAT(manager.first_name, " ", manager.last_name) AS manager_name,
  COUNT(*) AS managed_employees_qty
FROM hr.employees AS manager
INNER JOIN hr.employees AS employee
ON manager.employee_id = employee.manager_id
GROUP BY manager_name;
```

## ✅ Exercícios do dia
1. Utilizando o `INNER JOIN`, encontre as vendas nacionais (`domestic_sales`) e internacionais (`international_sales`) de cada filme.
```
SELECT
  m.id,
  m.title,
  b.domestic_sales,
  b.international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id;
```

2. Utilizando o `INNER JOIN`, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (`international_sales`) do que vendas nacionais (`domestic_sales`).
```
SELECT
  m.id,
  m.title,
  (b.domestic_sales + b.international_sales) AS general_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;
```

3. Utilizando o `INNER JOIN`, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
```
SELECT
  m.id,
  m.title,
  b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
ORDER BY rating DESC;
```

4. Utilizando o `LEFT JOIN`, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
```
SELECT
  t.name,
  t.location,
  m.title,
  m.director,
  m.year,
  m.length_minutes
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY m.title ASC;
```

5. Utilizando o `RIGHT JOIN`, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
```
SELECT
  t.name,
  t.location,
  m.title,
  m.director,
  m.year,
  m.length_minutes
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name ASC;
```

6. (BÔNUS) Utilizando o `INNER JOIN`, selecione todas as informações dos filmes que estão em cartaz (possuem `theater_id` diferente de `NULL`) com avaliação maior que 8.
```
SELECT m.*
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
  ON m.id = b.movie_id
WHERE m.theater_id IS TRUE
  AND b.rating > 8;
```

## ✅ (EXTRAS) Atividades de Fixação | UNION e o UNION ALL
- Obs.: Para as atividades a seguir, será utilizado o banco de dados `sakila`.

1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela `staff` com a tabela `actor`, exibindo apenas o nome e o sobrenome. Seu resultado **não deve excluir nenhum funcionário ao unir as tabelas**.
```
SELECT first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;
```

2. Monte uma query que una os resultados das tabelas `customer` e `actor`, exibindo os nomes que contêm a palavra “tracy” na tabela `customer` e os que contêm “je” na tabela `actor`. Exiba apenas os **resultados únicos**.
```
(SELECT first_name FROM sakila.customer
  WHERE first_name LIKE '%tracy%')
UNION
(SELECT first_name FROM sakila.actor
  WHERE first_name LIKE '%je%');
```

3. Monte uma query que exiba a união dos cinco últimos nomes da tabela `actor`, o primeiro nome da tabela `staff` e cinco nomes a partir da 15ª posição da tabela `customer`. **Não permita que dados repetidos sejam exibidos**. Ordene os resultados em ordem alfabética.
```
(SELECT first_name FROM sakila.actor
  ORDER BY actor_id DESC
  LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff
  LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer
  LIMIT 5
  OFFSET 14)
ORDER BY first_name ASC;
```

4. Você quer exibir uma lista paginada com os nomes e sobrenomes de **todos** os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
```
(SELECT first_name, last_name FROM sakila.customer )
UNION ALL
(SELECT first_name, last_name FROM sakila.actor)
ORDER BY first_name ASC, last_name ASC
LIMIT 15 OFFSET 45;
```

## ✅ (EXTRAS) Atividades de Fixação | STORED PROCEDURES
- Obs.: Para as atividades a seguir, será utilizado o banco de dados `sakila`.

1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowMostPopularActors()
BEGIN
  SELECT
    a.actor_id,
    COUNT(*) AS movies_qty
  FROM sakila.actor AS a
  INNER JOIN sakila.film_actor AS fa
    ON a.actor_id = fa.actor_id
  GROUP BY a.actor_id
  ORDER BY movies_qty DESC
  LIMIT 10;
END $$

DELIMITER ;

-- Exemplo de aplicação:

CALL ShowMostPopularActors;
```

2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. Use as tabelas `film`, `film_category` e `category` para montar essa procedure.
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowMoviesByCategory(IN selected_category VARCHAR(100))
BEGIN
  SELECT
    f.film_id,
    f.title,
    c.category_id,
    c.name
  FROM sakila.film_category AS fc
  INNER JOIN sakila.film AS f
    ON fc.film_id = f.film_id
  INNER JOIN sakila.category AS c
    ON fc.category_id = c.category_id
  WHERE c.name = selected_category;
END $$

DELIMITER ;

-- Exemplo de aplicação:

CALL ShowMoviesByCategory('Horror');
```

3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE CheckByEmailIfCustomerIsActive(
    IN customer_email VARCHAR(200),
    OUT is_customer_active VARCHAR(200)
)
BEGIN
	SELECT
		IF (active = 1, 'Cliente ATIVO', 'Cliente INATIVO') INTO is_customer_active
    FROM sakila.customer
    WHERE email = customer_email;
END $$

-- Exemplo de aplicação:

CALL CheckByEmailIfCustomerIsActive('THEODORE.CULP@sakilacustomer.org', @procedure_response);
SELECT @procedure_response;
```

## ✅ (EXTRAS) Atividades de Fixação | STORED FUNCTIONS
- Obs.: Para as atividades a seguir, será utilizado o banco de dados `sakila`.

1. Utilizando a tabela `sakila.payment`, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado `customer_id`.
```
USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPaymentsByCustomer(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_payments INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = id
    INTO total_payments ;
    RETURN total_payments;
END $$

DELIMITER ;

-- Exemplo de aplicação:

SELECT GetTotalPaymentsByCustomer(10);
```

2. Crie uma function que, dado o parâmetro de entrada `inventory_id`, retorna o nome do filme vinculado ao registro de inventário com esse id.
```
USE sakila;
DELIMITER $$

CREATE FUNCTION GetFilmTitleByInventoryId(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
  DECLARE film_title VARCHAR(200);
	SELECT f.title
    FROM sakila.film AS f
    INNER JOIN sakila.inventory AS i
    ON f.film_id = i.film_id
    WHERE i.inventory_id = id
  INTO film_title ;
  RETURN film_title;
END $$

DELIMITER ;

-- Exemplo de aplicação:

SELECT GetFilmTitleByInventoryId(99);
```

3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.
```
USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalFilmsByCategory(selected_category VARCHAR(200))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_films INT;
	  SELECT COUNT(*)
      FROM sakila.film_category AS f
      INNER JOIN sakila.category AS c
      ON f.category_id = c.category_id
      WHERE c.name = selected_category
    INTO total_films ;
    RETURN total_films;
END $$

DELIMITER ;

-- Exemplo de aplicação:

SELECT GetTotalFilmsByCategory('Classics');
```

## ✅ (EXTRAS) Atividades de Fixação | TRIGGERS
- Obs.: Para as atividades a seguir, será utilizado o banco de dados `betrybe_automoveis`.

1. Crie um TRIGGER que, a cada nova inserção feita na tabela `carros`, defina o valor da coluna `data_atualizacao` para o momento do ocorrido, a `acao` para 'INSERÇÃO' e a coluna `disponivel_em_estoque` para 1.
```
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_car_insert
  BEFORE INSERT ON carros
  FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
      NEW.acao = 'INSERÇÃO',
      NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;
```

2. Crie um TRIGGER que, a cada atualização feita na tabela `carros`, defina o valor da coluna `data_atualizacao` para o momento do ocorrido e a `acao` para 'ATUALIZAÇÃO'.
```
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_car_update
  BEFORE UPDATE ON carros
  FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
      NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;
```

3. Crie um TRIGGER que, a cada exclusão feita na tabela `carros`, envie para a tabela `log_operacoes` as informações do `tipo_operacao` como 'EXCLUSÃO' e a `data_ocorrido` como o momento da operação.
```
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_car_delete
  AFTER DELETE ON carros
  FOR EACH ROW
BEGIN
  INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
  VALUES ('EXCLUSÃO', NOW());
END $$
DELIMITER ;
```

## ✅ (EXTRAS) Atividades de Fixação | EXISTS
- Obs.: Para as atividades a seguir, será utilizado o banco de dados `hotel`.

1. Usando o EXISTS na tabela `Books_lent` e `Books`, exiba o id e título dos livros que ainda não foram emprestados.
```
SELECT Id, Title FROM hotel.Books AS b
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
  WHERE book_id = b.Id
);
```

2. Usando o EXISTS na tabela `Books_lent` e `Books`, exiba o id e título dos livros que estão atualmente emprestados e que contêm a palavra “lost” no título.
```
SELECT Id, Title FROM hotel.Books AS b
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = b.Id
		AND returned = 0
) AND Title LIKE '%lost%';
```

3. Usando a tabela `CarSales` e `Customers`, exiba apenas o nome dos clientes que ainda não compraram um carro.
```
SELECT `Name` FROM hotel.Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
  WHERE CustomerID = c.CustomerID
);
```

4. Usando o comando `EXISTS` em conjunto com `JOIN` e as tabelas `Cars`, `Customers` e `CarSales`, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
```
SELECT
	customers.Name as client_name,
  cars.Name as car_model
FROM hotel.CarSales AS cs
INNER JOIN hotel.Customers AS customers
	ON customers.CustomerID = cs.CustomerID
INNER JOIN hotel.Cars AS cars
	ON cars.Id = cs.CarID
WHERE EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE CustomerID = customers.CustomerID
);
```
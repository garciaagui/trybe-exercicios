# &#9889; Atividades de Fixação & Exercícios | Bloco 20 - Dia 04 (Seção 02)

## &#9989; Atividades de Fixação | INSERT - Adicionando dados em tabelas
### Considerando o banco de dados sakila, faça as atividades a seguir.

#### 1. Insira um novo funcionário na tabela `sakila.staff`.
```
INSERT INTO sakila.staff
  (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Tony', 'Stark', 1, 'tony.stark@gmail.com', 2, 1, 'Tony', 'avengersassemble');
```

#### 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
```
INSERT INTO sakila.staff
  (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Steve', 'Rogers', 2, 'steve.rogers@gmail.com', 1, 1, 'Rogers', 'misscarter'),
  ('Peter', 'Parker', 3, 'peter.parker@gmail.com', 2, 1, 'Peter', 'maryjanewatson');
```

#### 3. Selecione os cinco primeiros nomes e sobrenomes da tabela `sakila.customer` e cadastre essas pessoas como atores na tabela `sakila.actor`.
```
INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;
```

#### 4. Cadastre três categorias de uma vez só na tabela `sakila.category`.
```
INSERT INTO sakila.category (name) 
VALUES
  ('Crime'),
  ('Biography'),
  ('Anime');
```

#### 5. Cadastre uma nova loja na tabela `sakila.store`.
```
INSERT INTO sakila.store (manager_staff_id, address_id) 
VALUES (3, 4);
```

## &#9989; Atividades de Fixação | UPDATE - Alterando dados
### Considerando o banco de dados sakila, faça as atividades a seguir.

#### 1. Atualize todas as linhas da tabela `sakila.actor` que possuem o primeiro nome “JULIA” para “JULES”.
```
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
```

#### 2. Altere a linha da tabela `categoria` onde o valor da coluna x é igual “Sci-fi” para “Science Fiction”.
```
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';
```

#### 3. Corrija para $25 o valor do aluguel da tabela `filmes` com duração maior que 100 minutos e que possuem classificação “G”, “PG” ou “PG-13” e um custo de substituição maior que $20.
```
UPDATE sakila.film
SET rental_rate = 25.00
WHERE length > 100
  AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
  AND replacement_cost > 20.00;
```

#### 4. Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel dos filmes com duração acima de 100 minutos passará a ser de $20,00.
```
UPDATE sakila.film
SET rental_rate = (
	CASE
		WHEN (length BETWEEN 0 AND 100) THEN 10.00
		WHEN (length > 100) THEN 20.00
		ELSE rental_rate
END);
```

# &#9889; Atividades de Fixação & Exercícios | Bloco 20 - Dia 04 (Seção 02)

### Para as Atividades de Fixação, consideraremos o banco de dados `sakila`.

## &#9989; Atividades de Fixação | INSERT - Adicionando dados em tabelas

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

## &#9989; Atividades de Fixação | DELETE - Removendo dados de uma tabela

#### 1. Exclua do banco de dados o ator com o nome de “KARL”.
```
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';
```

#### 2. Exclua do banco de dados os `atores` com o nome de “MATTHEW”.
```
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';
```

#### 3. Exclua da tabela `film_text` todos os registros que possuem a palavra “saga” em suas descrições.
```
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';
```

#### 4. Apague da maneira mais performática possível todos os registros das tabelas `film_actor` e `film_category`.
```
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
```

#### 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
R.: 
- Tabelas SEM RESTRIÇÕES: actor, category, country, film_text e language;
- Tabelas com restrição 'ON DELETE RESTRICT ON UPDATE CASCADE': address, city, customer, film, film_actor, film_category, inventory, rental, staff e store;
- Tabela com restrições 'ON DELETE RESTRICT ON UPDATE CASCADE' e 'ON DELETE SET NULL ON UPDATE CASCADE': payment.

#### 6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
R.:
- Para excluir: Clicar com o botão direito no schema e selecionar a opção "Drop Schema...";
- Para restaurar: Baixar o arquivo .sql do sakila → Copiar e colar seu conteúdo em uma nova janela de query no MySQL Workbench → Clicar em executar.

## &#9989; Exercícios do Dia
#### Considerando o banco de dados `Pixar`, realize os exercícios a seguir.

#### 1. Insira as produções da Pixar na tabela `Movies`:
- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
```
INSERT INTO Pixar.Movies
  (title, director, year, length_minutes)
VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
  ('Procurando Nemo', 'John Lasseter', 2003, 107),
  ('Os Incríveis', 'Brad Bird', 2004, 116),
  ('WALL-E', 'Pete Docter', 2008, 104);
```

#### 2. O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela `BoxOffice`.
```
INSERT INTO Pixar.BoxOffice
	(movie_id, rating, domestic_sales, international_sales)
VALUES
	(9, 6.8, 450000000, 370000000);
```

#### 3. O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o comando UPDATE.
```
UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';
```

#### 4. O título do filme “Ratatouille” está incorreto na tabela `Movies`. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.
```
UPDATE Pixar.Movies
SET title = 'Ratatouille', year = 2007
WHERE id = 3;
```

#### 5. Insira as novas classificações abaixo na tabela `BoxOffice`, lembre-se que a coluna `movie_id` é uma `foreign key` referente a coluna id da tabela `Movies`:
- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
```
INSERT INTO Pixar.BoxOffice
	(movie_id, rating, domestic_sales, international_sales)
VALUES
	(8, 8.5, 300000000, 250000000),
  (10, 7.4, 460000000, 510000000),
  (11, 9.9, 290000000, 280000000);
```

#### 6. Exclua da tabela `Movies` o filme “WALL-E”.
```
DELETE FROM Pixar.BoxOffice
WHERE movie_id = 11;

DELETE FROM Pixar.Movies
WHERE id = 11;
```

#### 7. Exclua da tabela `Movies` todos os filmes dirigidos por “Andrew Staton”.
```
DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (2,9);

DELETE FROM Pixar.Movies
WHERE id IN (2,9);
```


#### (BÔNUS) 8. Altere a classificação da tabela `BoxOffice` para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
```
UPDATE Pixar.BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;
```

#### (BÔNUS) 9. Altere a classificação da tabela `BoxOffice` para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
```
UPDATE Pixar.BoxOffice
SET rating = 6.0
WHERE international_sales < 300000000 AND domestic_sales > 200000000;
```

#### (BÔNUS) 10. Exclua da tabela `Movies` todos os filmes com menos de 100 minutos de duração.
```
DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM Pixar.Movies
WHERE length_minutes < 100;
```
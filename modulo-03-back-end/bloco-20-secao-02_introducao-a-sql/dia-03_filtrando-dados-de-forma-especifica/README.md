# &#9889; Atividades de Fixação & Exercícios | Bloco 20 - Dia 03 (Seção 02)

## &#9989; Atividades de Fixação | Operadores booleanos e relacionais
### Considerando o banco de dados sakila, encontre as informações a seguir.

1. Precisamos identificar os dados do cliente com o e-mail `LEONARD.SCHOFIELD@sakilacustomer.org`. As informações podem ser encontradas na tabela customer.
```
SELECT * FROM sakila.customer
WHERE email = "LEONARD.SCHOFIELD@sakilacustomer.org";
```

2. Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = `2`, e não inclua o cliente `KENNETH` no resultado. As informações podem ser encontradas na tabela customer.
```
SELECT first_name FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND NOT first_name = "KENNETH"
ORDER BY first_name ASC;
```

3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
```
SELECT title, description, release_year, replacement_cost
FROM sakila.film
WHERE rating <> 'NC-17'
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;
```

4. Quantos clientes estão ativos e na loja 1? As informações podem ser encontradas na tabela customer.
```
SELECT COUNT(*) AS "Number of Active Customers" FROM sakila.customer
WHERE active IS TRUE
AND store_id = 1;

-- Retorno: 318.
```

5. Mostre todos os detalhes dos clientes que não estão ativos na loja 1. As informações podem ser encontradas na tabela customer.
```
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 1;
```

6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film.
```
SELECT title FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC
LIMIT 50;
```

## &#9989; Atividades de Fixação | LIKE - Criando pesquisas mais dinâmicas
### Considerando o banco de dados sakila, encontre as informações a seguir.

#### 1. Mostre todos os detalhes dos filmes que contêm a palavra `ace` no nome.
```
SELECT * FROM sakila.film
WHERE title LIKE "%ace%";
```

#### 2. Mostre todos os detalhes dos filmes cujas descrições finalizam com `china`.
```
SELECT * FROM sakila.film
WHERE description LIKE "%china";
```

#### 3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra `girl` e o título finaliza com a palavra `lord`.
```
SELECT * FROM sakila.film
WHERE title LIKE "%lord"
AND description LIKE "%girl%";
```

#### 4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra `gon`.
```
SELECT * FROM sakila.film
WHERE title LIKE "___gon%";
```

#### 5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra `gon` e a descrição contém a palavra `Documentary`.
```
SELECT * FROM sakila.film
WHERE title LIKE "___gon%"
AND description LIKE "%Documentary%";
```

#### 6. Mostre os dois filmes cujos títulos ou finalizam com `academy` ou iniciam com `mosquito`.
```
SELECT * FROM sakila.film
WHERE title LIKE "%academy"
OR title LIKE "mosquito%";
```

#### 7. Mostre os seis filmes que contêm as palavras `monkey` e `sumo` em suas descrições.
```
SELECT * FROM sakila.film
WHERE description LIKE "%monkey%"
AND description LIKE "%sumo%";
```

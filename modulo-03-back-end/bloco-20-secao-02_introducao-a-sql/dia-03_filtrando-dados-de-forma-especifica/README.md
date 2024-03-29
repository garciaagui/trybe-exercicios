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

## &#9989; Atividades de Fixação | IN e BETWEEN - Englobando uma faixa de resultados
### Considerando o banco de dados sakila, encontre as informações a seguir.

#### 1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: `hicks`, `crawford`, `henry`, `boyd`, `mason`, `morales` e `kennedy`, ordenados por nome em ordem alfabética.
```
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;
```

#### 2. Mostre o e-mail dos clientes com os address_id `172`, `173`, `174`, `175` e `176`, ordenados em ordem alfabética.
```
SELECT email FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email ASC;
```

#### 3. Descubra quantos pagamentos foram feitos entre `01/05/2005` e `01/08/2005`. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
```
SELECT COUNT(*) AS "Number of Payments" FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005/05/01' AND '2005/08/01';

-- Retorno: 10851
```

#### 4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de `3` a `6`. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
```
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;
```

#### 5. Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas `G`, `PG` e `PG-13`. Os resultados devem estar ordenados por título.
```
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title ASC
LIMIT 500;
```

## &#9989; Atividades de Fixação | Data e tempo - Lidando com resultados temporais
### Considerando o banco de dados sakila, encontre as informações a seguir.

#### 1. Quantos pagamentos temos com a data de retorno `2005-05-25`?
```
SELECT COUNT(*) AS "Number of Payments" FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

-- Retorno: 137
```

#### 2. Quantos pagamentos foram feitos entre `01/07/2005` e `22/08/2005`?
```
SELECT COUNT(*) AS "Number of Payments" FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

-- Retorno: 11173
```

#### 3. Usando a tabela rental, extraia `data`, `ano`, `mês`, `dia`, `hora`, `minuto` e `segundo` dos registros com `rental_id = 10330`. Utilize a coluna rental_date para extrair as informações.
```
SELECT DATE(rental_date) AS 'Full Date',
YEAR(rental_date) AS Year,
MONTH(rental_date) AS Month,
DAY(rental_date) AS Day,
HOUR(rental_date) AS Hour,
MINUTE(rental_date) AS Minute,
SECOND(rental_date) AS Second FROM sakila.rental
WHERE rental_id = 10330;
```

#### 4. Monte uma query que retorne todos os dados do pagamento feito no dia `28/07/2005` a partir das `22 horas`.
```
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = "2005-07-28"
AND HOUR(payment_date) >= 22;
```

## &#9989; Exercícios do Dia
#### Restaure o banco de dados `PecasFornecedores` e realize as tarefas a seguir.

#### 1. Faça uma consulta que retorne todas as peças que começam com as letras `GR`.
```
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE "GR%";
```

#### 2. Agora, escreva uma query para retornar todos os fornecimentos em que a coluna `peca` possua o valor `2`. Organize o resultado por ordem alfabética de fornecedor.
```
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor ASC;
```

#### 3. Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do `fornecedor` tenha a letra `N`.
```
SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE "%N%";
```

#### 4. Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (`LTDA`). Ordene esses resultados em ordem alfabética decrescente.
```
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE "%LTDA%"
ORDER BY name DESC;
```

#### 5. Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra `F` no código.
```
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE "%F%";

-- Retorno: 2
```

#### 6. Agora escreva uma query para exibir os fornecimentos onde as peças custam `mais de R$15,00 e menos de $40,00`. Ordene os resultados por ordem crescente.
```
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco ASC;
```

#### 7. Por fim, faça uma query para exibir o número de vendas feitas `entre o dia 15/04/2018 e o dia 30/07/2019`.
```
SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';

-- Retorno: 3
```

## &#9989; Exercícios Bônus
#### Considerando o banco de dados `Scientists`, realize os exercícios a seguir. Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).


#### 1. Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra `e` em seu nome.
```
SELECT * FROM Scientists.Scientists
WHERE Name LIKE "%e%";
```

#### 2. Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra `A` . Ordene o resultado em ordem alfabética.
```
SELECT Name FROM Scientists.Projects
WHERE Code LIKE "A%"
ORDER BY Name ASC;
```

#### 3. Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número `3`. Ordene o resultado em ordem alfabética.
```
SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE "%3%"
ORDER BY Name ASC;
```

#### 4. Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam `AeH3`, `Ast3` ou `Che1`.
```
SELECT Scientist FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');
```

#### 5. Escreva uma query para exibir todas as informações de todos os projetos com mais de `500` horas.
```
SELECT * FROM Scientists.Projects
WHERE Hours > 500;
```

#### 6. Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que `250` e menores `800`.
```
SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 250 AND 800;
```

#### 7. Escreva uma query para exibir o nome e o código de todos os projetos cujo nome **NÃO** inicie com a letre `A`.
```
SELECT Name, Code FROM Scientists.Projects
WHERE Name NOT LIKE "A%";
```

#### 8. Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra `H`.
```
SELECT Name FROM Scientists.Projects
WHERE Name LIKE "%H%";
```
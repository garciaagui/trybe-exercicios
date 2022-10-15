# &#9889; Atividades de Fixação & Exercícios | Bloco 20 - Dia 02 (Seção 02)

## &#9989; Atividades de Fixação | SELECT, o primeiro passo

#### 1. Monte uma query que exiba seu nome na tela.
```
SELECT 'Guilherme';
```

#### 2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela.
```
SELECT 'Guilherme', 'Garcia', 'Porto Feliz/SP', 23;
```

#### 3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o `AS`.
```
SELECT 'Guilherme' AS Nome, 'Garcia' AS Sobrenome, 'Porto Feliz/SP' as Cidade, 23 as Idade;
```

#### 4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o `SELECT`.
R.: 104.
```
SELECT 13 * 8;
```

#### 5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome “Data Atual”.
```
SELECT now() AS 'Data Atual';
```

### Considerando o banco de dados sakila, encontre as seguintes informações montando uma query para cada uma.

#### 6. Escreva uma query que selecione todas as colunas da tabela `city`.
```
SELECT * FROM sakila.city;
```

#### 7. Escreva uma query que exiba apenas as colunas `first_name` e `last_name` da tabela `customer`.
```
SELECT first_name, last_name FROM sakila.customer;
```

#### 8. Escreva uma query que exiba todas as colunas da tabela `rental`.
```
SELECT * FROM sakila.rental;
```

#### 9. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film.
```
SELECT title, description, release_year FROM sakila.film;
```

## &#9989; Atividades de Fixação | CONCAT - Juntando duas ou mais colunas
#### 1. Na tabela `sakila.film`, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome "Lançamento do Filme".
```
SELECT CONCAT(title,' - ', release_year) AS "Lançamento do Filme" FROM sakila.film;
```

#### 2. Na tabela `sakila.film`, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome "Classificação". Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
```
SELECT CONCAT(title,' - ', rating) AS Classificação FROM sakila.film;
```

#### 3. Na tabela `sakila.address`, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome "Endereço".
```
SELECT CONCAT(address,' - ', district) AS Endereço FROM sakila.address;
```

## &#9989; Atividades de Fixação | DISTINCT - Evitando dados repetidos
### Considerando a tabela Estudantes do banco de dados Escola, indique as queries para encontrar os dados a seguir.

#### 1. Monte uma query para encontrar pares únicos de nomes e idades. Quantas linhas foram encontradas?
```
SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;

-- Todas as linhas foram retornadas: 05.
```

#### 2. Monte uma query para encontrar somente os nomes únicos. Quantas linhas foram encontradas?
```
SELECT DISTINCT Nome FROM Escola.Estudantes;

-- Linhas retornadas: 04.
```

#### 3. Monte uma query para encontrar somente as idades únicas. Quantas linhas foram encontradas?
```
SELECT DISTINCT Idade FROM Escola.Estudantes;

-- Linhas retornadas: 04.
```

## &#9989; Atividades de Fixação | COUNT - Contando resultados
### Considerando a tabela staff do banco de dados sakila, responda às seguintes questões.

#### 1. Quantas senhas temos cadastradas nessa tabela?
```
SELECT COUNT(password) FROM sakila.staff;

-- Retorno: 01.
```

#### 2. Quantas pessoas temos no total trabalhando para nossa empresa?
```
SELECT COUNT(*) FROM sakila.staff;

-- Retorno: 02.
```

#### 3. Quantos emails temos cadastrados nessa tabela?
```
SELECT COUNT(email) FROM sakila.staff;

-- Retorno: 02.
```

## &#9989; Atividades de Fixação | LIMIT OFFSET - Pulando linhas desnecessárias
![Table Exercise Limit Offset](exercise-limit-offset.png)
#### Considerando a tabela acima, qual query poderia ser utilizada para trazer os 10 primeiros resultados, a partir de `JOHNNY`?
```
SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;
```

## &#9989; Atividades de Fixação | Juntando tudo que vimos hoje
### Para os exercícios a seguir, vamos usar a tabela `sakila.film`:

#### 1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
```
SELECT * FROM sakila.film;
```

#### 2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
```
SELECT title, release_year, rating FROM sakila.film;
```

#### 3. Quantos filmes temos cadastrados?
```
SELECT COUNT(*) FROM sakila.film;

-- Retorno: 1000.
```

### Para os exercícios a seguir, vamos usar a tabela sakila.actor:

#### 4. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
```
SELECT DISTINCT last_name FROM sakila.actor;
```

#### 5. Quantos sobrenomes únicos temos na tabela?
```
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

-- Retorno: 121.
```

#### 6. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
```
SELECT * FROM sakila.actor
ORDER BY last_name ASC, first_name DESC;
```

### Usando a tabela `language`:

#### 7. Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
```
SELECT * FROM sakila.language LIMIT 10 OFFSET 1;

-- 0R

SELECT * FROM sakila.language
WHERE name != 'English';
```

### Usando a tabela `film`:

#### 8. Selecione todos os dados da tabela e faça o seguinte: Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
```
SELECT title, release_year, length, rating, replacement_cost 
FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;
```

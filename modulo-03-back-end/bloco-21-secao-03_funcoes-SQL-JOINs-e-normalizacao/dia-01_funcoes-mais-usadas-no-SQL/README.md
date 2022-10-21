# ⚡ Atividades de Fixação & Exercícios | Bloco 21 - Dia 01 (Seção 03)

## ✅ Atividades de Fixação | Manipulação de strings
1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
```
SELECT UCASE('trybe');
```

2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
```
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
```

3. Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
```
SELECT CHAR_LENGTH('Uma frase qualquer');
```

4. Extraia e retorne apenas a palavra “JavaScript” da frase 'A linguagem JavaScript está entre as mais usadas'.
```
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
```

5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
```
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
```

## ✅ Atividades de Fixação | Condicionais
1. Usando o `IF` na tabela `sakila.film`, exiba o id do filme, o título e uma coluna extra chamada ‘conheço o filme?’, em que deve-se avaliar se o nome do filme é ‘ACE GOLDFINGER‘. Caso seja, exiba “Já assisti a esse filme”. Caso contrário, exiba “Não conheço o filme”. Não esqueça de usar um alias para renomear a coluna da condicional.
```
SELECT film_id, title,
IF (title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;
```

2. Usando o `CASE` na tabela `sakila.film`, exiba o título, a classificação indicativa (rating) e uma coluna extra que vamos chamar de ‘público-alvo’ em que colocaremos a classificação do filme de acordo com as seguintes siglas:
- G: “Livre para todos”;
- PG: “Não recomendado para menores de 10 anos”;
- PG-13: “Não recomendado para menores de 13 anos”;
- R: “Não recomendado para menores de 17 anos”;
- Se não cair em nenhuma das classificações anteriores: “Proibido para menores de idade”.
```
SELECT title, rating,
  CASE
    WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
  END AS 'público-alvo'
FROM sakila.film;
```

## ✅ Atividades de Fixação | Funções matemáticas do MySQL
### Desafios com DIV e MOD
1. Monte uma query usando o `MOD` juntamente com o `IF` para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de ‘Par ou Ímpar’, onde ela pode dizer ‘Par’ ou ‘Ímpar’.
```
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar?'
```

2. Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
```
SELECT 220 DIV 12;

-- 18 grupos completos
```

3. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
```
SELECT 220 MOD 12;

-- Sim, 4 lugares
```

### Para fixar
1. Monte uma query que gere um valor entre 15 e 20.
```
SELECT ROUND(15 + (RAND() * 5));
```

2. Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
```
SELECT ROUND(15.7515971, 5);
```

3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
```
SELECT FLOOR(39.494);

-- 39 camisas
```

4. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
```
SELECT CEIL(85.234);

-- 86%
```

## ✅ Atividades de Fixação | Trabalhando com datas
1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
```
SELECT DATEDIFF('2030-01-20', NOW());
```

2. Monte uma query que exiba a diferença de horas entre '10:25:45' e '11:00:00'.
```
SELECT TIMEDIFF('10:25:45', '11:00:00');
```

## ✅ Atividades de Fixação | Utilizando as funções de agregação AVG, MIN, MAX, SUM e COUNT
1. Monte um query que exiba:
- A média de duração dos filmes e dê o nome da coluna de ‘Média de Duração’;
- A duração mínima dos filmes como ‘Duração Mínima’;
- A duração máxima dos filmes como ‘Duração Máxima’;
- A soma de todas as durações como ‘Tempo de Exibição Total’;
- E, finalmente, a quantidade total de filmes cadastrados na tabela `sakila.film` como ‘Filmes Registrados’.
```
SELECT
  ROUND(AVG(length), 2) AS 'Média de Duração',
  MIN(length) AS 'Duração Mínima',
  MAX(length) AS 'Duração Máxima',
  SUM(length) AS 'Tempo de Exibição Total',
  COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;
```

## ✅ Atividades de Fixação | Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING
### Praticando GROUP BY
1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela `sakila.customer` que estão ativos e a quantidade que estão inativos.
```
SELECT active, COUNT(*) AS quantity
FROM sakila.customer
GROUP by active;
```

2. Monte uma query para a tabela `sakila.customer` que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
```
SELECT store_id, active, COUNT(*) AS quantity
FROM sakila.customer
GROUP by store_id, active
ORDER BY store_id, active;
```

3. Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela `sakila.film`. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
```
SELECT ROUND(AVG(rental_duration),2) AS avg_rental_duration, rating
FROM sakila.film
GROUP by rating
ORDER BY avg_rental_duration DESC;
```

4. Monte uma query para a tabela `sakila.address` que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
```
SELECT district, COUNT(*) AS registered_adresses
FROM sakila.address
GROUP by district
ORDER BY registered_adresses DESC;
```

### Para fixar
1. Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por `AVG(length)`, de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
```
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
```
- Resposta...:
```
SELECT rating, AVG(length) AS avg_length
FROM sakila.film
GROUP BY rating
HAVING avg_length BETWEEN 115.0 AND 121.50
ORDER BY avg_length DESC;
```

2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para `SUM(replacement_cost)`, de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
```
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
```
- Resposta...:
```
SELECT rating, SUM(replacement_cost) AS total_replacement_cost
FROM sakila.film
GROUP by rating
HAVING total_replacement_cost > 3950.5
ORDER BY total_replacement_cost ASC;
```

## ✅ Exercícios do Dia

- Considerando a tabela `employees` do banco de dados `hr`, faça os exercícios a seguir.

1. Escreva uma query que exiba o maior salário da tabela.
```
SELECT MAX(salary) AS highest_salary
FROM hr.employees;
```

2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
```
SELECT (MAX(salary) - MIN(salary)) AS biggest_salary_diff
FROM hr.employees;
```

3. Escreva uma query que exiba a média salarial de cada `JOB_ID`, ordenando pela média salarial em ordem decrescente.
```
SELECT job_id, ROUND(AVG(salary),2) AS avg_salary
FROM hr.employees
GROUP BY job_id
ORDER BY avg_salary DESC;
```

4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
```
SELECT SUM(salary) AS total_salary FROM hr.employees;
```

5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
```
SELECT
  ROUND(MAX(salary), 2) AS highest_salary,
  ROUND(MIN(salary), 2) AS lowest_salary,
  ROUND(AVG(salary), 2) AS avg_salary,
  ROUND(SUM(salary), 2) AS total_salary
FROM hr.employees;
```

6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (`IT_PROG`).
```
SELECT job_id, COUNT(*) AS total_employees
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

-- OR

SELECT job_id, COUNT(*) AS total_employees FROM hr.employees
WHERE job_id = 'IT_PROG';
```

7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (`JOB_ID`).
```
SELECT job_id, SUM(salary) AS total_salary
FROM hr.employees
GROUP BY job_id;
```

8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (`IT_PROG`).
```
SELECT job_id, SUM(salary) AS total_salary
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';
```

9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (`IT_PROG`).
```
SELECT job_id, ROUND(AVG(salary),2) AS avg_salary
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY avg_salary DESC;
```

10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos (`DEPARTMENT_ID`) com mais de dez funcionários.
```
SELECT 
  department_id,
  ROUND(AVG(salary),2) AS avg_salary,
  COUNT(*) AS total_employees
FROM hr.employees
GROUP BY department_id
HAVING total_employees > 10;
```

11. Escreva uma query que atualize a coluna `PHONE_NUMBER`, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
```
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
```

12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
```
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;
```

13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
```
SELECT 
  employee_id, first_name, YEAR(hire_date) AS hire_year
FROM hr.employees;
```

14. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
```
SELECT
  employee_id, first_name, DAY(hire_date) AS hire_day
FROM hr.employees;
```

15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
```
SELECT
  employee_id,first_name, MONTH(hire_date) AS hire_month
FROM hr.employees;
```

16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
```
SELECT UCASE(CONCAT(first_name, " ", last_name)) AS full_name
FROM hr.employees;
```

17. Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
```
SELECT last_name, hire_date FROM hr.employees
WHERE hire_date LIKE '1987-07%';
```

18. Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
```
SELECT
  first_name, last_name, DATEDIFF(NOW(), hire_date) AS days_as_employee
FROM hr.employees;
```
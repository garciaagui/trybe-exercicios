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
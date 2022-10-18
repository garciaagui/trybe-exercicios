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
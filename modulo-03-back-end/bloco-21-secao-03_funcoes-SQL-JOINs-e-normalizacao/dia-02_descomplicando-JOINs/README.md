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
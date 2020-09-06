-- Monte uma query que exiba o id do ator, nome do ator e id do filme 
-- em que ele já atuou usando as tabelas actor e film_actor.

SELECT actor.actor_id, actor.first_name, film.title
FROM sakila.actor as actor
INNER JOIN sakila.film_actor as fa
ON actor.actor_id = fa.actor_id
INNER JOIN sakila.film as film
ON fa.film_id = film.film_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. 
-- Use as tabelas staff e address.

SELECT staff.first_name, staff.last_name, ad.address
FROM sakila.staff as staff
INNER JOIN sakila.address as ad
ON staff.address_id = ad.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, 
-- ordenados pelo nome em ordem decrescente, 
-- juntamente com o id do endereço e o nome da rua onde o cliente mora. 
-- Essas informações podem ser encontradas nas tabelas customer e address.

SELECT ctm.customer_id, ctm.first_name, ctm.email, ad.address_id, ad.address
FROM sakila.customer as ctm
INNER JOIN sakila.address as ad
ON ctm.address_id = ad.address_id
ORDER BY ctm.first_name DESC LIMIT 100; 

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes 
-- que moram no distrito da California e que contêm "rene" em seus nomes. 
-- As informações podem ser encontradas nas tabelas address e customer.

SELECT ctm.first_name, ctm.email, ad.address_id, ad.district
FROM sakila.customer as ctm
INNER JOIN sakila.address as ad
ON ctm.address_id = ad.address_id
WHERE ad.district = 'California' AND ctm.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. 
-- Ordene seus resultados por nomes de forma decrescente. 
-- Exiba somente os clientes ativos. 
-- As informações podem ser encontradas na tabela address e customer.

SELECT ctm.first_name, COUNT(ad.address_id)
FROM sakila.customer as ctm
INNER JOIN sakila.address as ad
ON ctm.address_id = ad.address_id
WHERE ctm.active= 1
GROUP BY ctm.first_name
ORDER BY ctm.first_name DESC;

-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) 
-- paga aos funcionários no ano de 2006. Use as tabelas payment e staff. 
-- Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT staff.first_name, staff.last_name, AVG(pay.amount)
FROM sakila.staff AS staff
INNER JOIN sakila.payment AS pay
ON staff.staff_id = pay.staff_id
WHERE year(pay.payment_date) = 2006
GROUP BY first_name, last_name;

-- Monte uma query que exiba o id do ator, nome, id do filme e titulo do filme,
-- usando as tabelas actor, film_actor e film. 
-- Dica: você precisará fazer mais de um JOIN na mesma query.

SELECT actor.actor_id, actor.first_name, film.film_id, film.title
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS fa
ON actor.actor_id = fa.actor_id
INNER JOIN sakila.film AS film
ON fa.film_id = film.film_id;


SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
RIGHT JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;
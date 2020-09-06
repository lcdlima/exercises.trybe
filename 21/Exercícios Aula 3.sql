-- Exiba o título, o id do idioma e o idioma de todos os filmes, 
-- utilizando apenas SUBQUERY para encontrar o idioma. 
-- A SUBQUERY deve possuir o alias idioma. 
-- Use as tabelas film e language para encontrar essa informação.

SELECT title, language_id, (
	SELECT name 
    FROM sakila.language
    WHERE language.language_id = film.language_id
    ) AS idioma
FROM sakila.film;

-- Usando as tabelas staff e address, exiba o nome, sobrenome, id do endereço 
-- e endereço dos funcionários usando apenas subqueries. 
-- A SUBQUERY deve possuir o alias endereco.

SELECT first_name, last_name, address_id, (
	SELECT address
    FROM sakila.address
    WHERE staff.address_id = address.address_id
) AS endereco
FROM sakila.staff;

-- Reescreva a resposta do exercício 1 utilizando JOIN.

SELECT f.title, f.language_id, l.name AS idioma
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON f.language_id = l.language_id;

-- Reescreva a resposta da exercício 2 utilizando JOIN.

SELECT s.first_name, s.last_name, s.address_id, a.address AS endereco
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

-- Utilizando a tabela payment, exiba, com uma subquery, o id do cliente 
-- e o valor (amount) dos 5 clientes mais novos que possuem o maior valor de pagamento.

SELECT customer_id, (
	SELECT AVG(amount)
    FROM sakila.payment
    WHERE payment.customer_id = customer.customer_id
) AS valor
FROM sakila.customer
ORDER BY create_date DESC, valor DESC LIMIT 5;

-- Utilizando apenas subqueries, exiba os nomes dos atores ou atrizes que 
-- já atuaram em mais de 40 filmes. Use as tabelas actor e film_actor.

SELECT first_name
FROM actor
WHERE (
	SELECT SUM(film_id)
    FROM sakila.film_actor
    WHERE film_actor.actor_id = actor.actor_id
) > 40;

-- Usando o EXISTS na tabela books_lent e books, exiba o id 
-- e título dos livros que ainda não foram emprestados.

SELECT books.id, books.title
FROM hotel.books 
WHERE NOT EXISTS (
	SELECT * FROM hotel.books_lent WHERE books.id = books_lent.book_id
);

-- Usando o EXISTS na tabela books_lent e books, exiba o id e 
-- título dos livros estão atualmente emprestados e que contem a palavra "lost" no título.

SELECT books.id, books.title
FROM hotel.books
WHERE EXISTS (
	SELECT * FROM hotel.books_lent WHERE books.id = books_lent.book_id
) AND books.title LIKE '%lost%';
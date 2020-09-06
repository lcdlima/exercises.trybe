SELECT 'Letícia';
SELECT 'Letícia', 'Lima', 'Volta Redonda', 28;
SELECT 'Letícia' AS nome, 'Lima' AS sobrenome, 'Volta Redonda' AS cidade_natal, 28 AS idade;
SELECT 13*8 AS result;
SELECT now() AS data_atual, date(now()) AS date, hour(now()) AS hour;

USE sakila;
SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT title, description, release_year FROM film;

SELECT * FROM film;
SELECT CONCAT(title, ' ', release_year) AS movie_release FROM film;
SELECT CONCAT(title, ' ', rating) AS classification FROM film;

SELECT * FROM address;
SELECT CONCAT(address, ' ', district) AS endereco FROM address;

SELECT COUNT(password) FROM staff;
SELECT COUNT(staff_id) FROM staff;

SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;

SELECT * FROM sakila.rental LIMIT 10 OFFSET 10;

SELECT * FROM sakila.actor LIMIT 10 OFFSET 5;

SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT DISTINCT last_name FROM actor;
SELECT COUNT(*) FROM sakila.film;
SELECT COUNT(*) FROM sakila.customer;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT COUNT(*) FROM sakila.film_category;
SELECT COUNT(*) FROM sakila.country;
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

SELECT * FROM film;
SELECT title, release_year, length, rating, replacement_cost FROM film ORDER BY length DESC, replacement_cost LIMIT 20;
SELECT * FROM customer
WHERE email LIKE 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM customer
WHERE active IS NOT true AND store_id LIKE 2 AND first_name NOT LIKE 'KENNETH' ORDER BY first_name;

SELECT title, description, release_year FROM film
WHERE replacement_cost >=18 ORDER BY replacement_cost DESC;

SELECT COUNT(*) FROM sakila.customer
WHERE active IS true AND store_id LIKE 1;

SELECT * FROM customer
WHERE active IS NOT true AND store_id LIKE 1;

SELECT * FROM film
WHERE rating LIKE 'NC-17' ORDER BY rental_rate LIMIT 50;

SELECT * FROM film
WHERE title LIKE '%ace%';

SELECT * from film
WHERE description LIKE '%china';

SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM film
WHERE title LIKE '___gon%';


-- Създаване на нова празна база данни 
create database online_shop;

-- Избираме база данни с която 	ще се работи (схема)
USE online_shop; 

-- Правим нова таблица в която да пазим данни за потребителитеalter
CREATE TABLE td_users(
	username VARCHAR(256),
    password VARCHAR(256),
    email VARCHAR(256),
    age INT
);

-- (CREATE) -- създаване на нов запис
INSERT INTO td_users(username, password, email, age)
VALUES("petarpetrov", "password", "mymail@mymail.bg", 29);

INSERT INTO td_users(username, password, email, age)
VALUES("peshopetkov", "password1", "mymail1@mymail.bg", 27);

INSERT INTO td_users(username, password, email, age)
VALUES("ivandimitrov", "password2", "mymail2@mymail.bg", 49);

INSERT INTO td_users(username, password, email, age)
VALUES("nikolaiivanov", "password2", "mymail3@mymail.bg", 58);
 
 -- (READ) -- Четене на съществуващ запис от базата данни
SELECT email, age 
FROM td_users;

-- (READ) -- Четене на конкретна информация
SELECT *
FROM td_users
WHERE email = "mymail1@mymail.bg";

SELECT *
FROM td_users
WHERE age >= 40; 

SELECT *
FROM td_users
WHERE age >= 50 AND username = "petar";

SELECT *
FROM td_users
WHERE email LIKE "%mail3";

-- (UPDATE) -- Актуализиране на един ред
UPDATE td_users
SET age = 62 
WHERE email = "mymail3@mymail.bg";

-- (UPDATE) -- Актуализиране на всички редове
UPDATE td_users
SET age = 62;

-- (DELETE) -- Изтриване на един ред
DELETE 
FROM td_users
WHERE email = "mymail3@mymail.bg";

-- (DELETE) -- Изтриване на всички редове
DELETE 
FROM td_users

-- Допълнителна команда за изтриване на всички редовe
TRUNCATE td_users;


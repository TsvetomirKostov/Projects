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
VALUES("tsvetomirkostov", "password", "cvetomirnkostov@abv.bg", 29);

INSERT INTO td_users(username, password, email, age)
VALUES("elenakostova", "password1", "elenakostova@abv.bg", 27);

INSERT INTO td_users(username, password, email, age)
VALUES("ninakostova", "password2", "ninakostova@abv.bg", 49);

INSERT INTO td_users(username, password, email, age)
VALUES("nikolaikostov", "password2", "nikolaikostov@nikcho.bg", 58);
 
 -- (READ) -- Четене на съществуващ запис от базата данни
SELECT email, age 
FROM td_users;

-- (READ) -- Четене на конкретна информация
SELECT *
FROM td_users
WHERE email = "elenakostova@abv.bg";

SELECT *
FROM td_users
WHERE age >= 40; 

SELECT *
FROM td_users
WHERE age >= 50 AND username = "tsvetomir";

SELECT *
FROM td_users
WHERE email LIKE "%nikcho.bg";

-- (UPDATE) -- Актуализиране на един ред
UPDATE td_users
SET age = 62 
WHERE email = "nikolaikostov@nikcho.bg";

-- (UPDATE) -- Актуализиране на всички редове
UPDATE td_users
SET age = 62;

-- (DELETE) -- Изтриване на един ред
DELETE 
FROM td_users
WHERE email = "nikikostov@abv.bg";

-- (DELETE) -- Изтриване на всички редове
DELETE 
FROM td_users

-- Допълнителна команда за изтриване на всички редовe
TRUNCATE td_users;


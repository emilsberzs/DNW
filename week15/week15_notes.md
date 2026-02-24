# Aggregation in SQL
## Start SQL server
1. Open MySQL shell
2. run \sql
3. Win + R, search services.msc, find mysql80, start the server
4. \connect root@localhost
5. enter password

## Basic commands
6. run 'show databases' to see what databases are on the server
7. use database_name;
8. show tables;
9. describe table_name;
8. select * from database_name

## Create and populate database and table
- CREATE DATABASE myBookshop; 
- USE myBookShop;
- CREATE TABLE books (
    - id INT AUTO_INCREMENT,
    - name VARCHAR(50),
    - price DECIMAL(5, 2),
    - PRIMARY KEY(id));
- SHOW table;
- describe books;
- INSERT INTO books (name, price)
   -  VALUES('Don Quixote', 19.99),
    - ('Atlas of the World', 25.00),
    - ('World History', 31.99);

## Counting rows
- Let’s now count the number of rows that match a particular query.
First, work with the myOtherBookshop database:
1. Switch to the myOtherBookshop database:
    - USE myOtherBookshop;
2. Find the number of books
    - SELECT COUNT(id) FROM Book
3. Find the number of books priced at less than £30.
    - SELECT COUNT(id) FROM Book WHERE Book.price < 30; 

## Summing values across rows
- Let’s now sum the total of a field in a table.
4. Find the sum of all the prices of the books in your book shop:
    - SELECT SUM(price) FROM Book;

## Find the cheapest and most expensive book:
- SELECT MIN(price) FROM Book;
- SELECT MAX(price) FROM Book; 

## Aggregates by groups
- Frequently, we don’t want to aggregate across a whole table. Rather, we want to aggregate
by groups of rows, with the grouping specified by another column in the table.
- For example, to find the number of books by category, group the rows by category and count
the number of rows in each category. To achieve this, use the GROUP BY clause.
7. Find the number of books per category:
    - SELECT category, COUNT(id)
    - FROM Book
    - GROUP BY category;

## 8. Find the number of books per publisher:
- SELECT Publisher.name, COUNT(Book.id)
FROM Book
JOIN Publisher ON Book.publisher_id = Publisher.id
GROUP BY Publisher.name;
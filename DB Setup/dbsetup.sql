DROP DATABASE bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
DROP TABLE products;
CREATE TABLE products (
    id INTEGER AUTO_INCREMENT NOT NULL, 
    product_name VARCHAR(255), 
    department_id INTEGER, 
    price DECIMAL(10,2), 
    stock_quantity INTEGER,
    PRIMARY KEY (id)
);

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT NOT NULL, 
    department_name VARCHAR(255),
    PRIMARY KEY (id)
);




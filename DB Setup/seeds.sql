
-- initial department seeds
USE bamazon_db;
INSERT INTO departments (department_name)
VALUES ("Apps & Games");
INSERT INTO departments (department_name)
VALUES ("Clothing, Shoes & Jewelry");
INSERT INTO departments (department_name)
VALUES ("Electronics");
INSERT INTO departments (department_name)
VALUES ("Health & Household");
INSERT INTO departments (department_name)
VALUES ("Industrial & Scientific");
INSERT INTO departments (department_name)
VALUES ("Kitchen & Dining");
INSERT INTO departments (department_name)
VALUES ("Men's Fashion");
INSERT INTO departments (department_name)
VALUES ("Novelty & More");
INSERT INTO departments (department_name)
VALUES ("Outdoor Recreation");
INSERT INTO departments (department_name)
VALUES ("Patio, Lawn, & Garden");
INSERT INTO departments (department_name)
VALUES ("Pet Supplies");
INSERT INTO departments (department_name)
VALUES ("Software");
INSERT INTO departments (department_name)
VALUES ("Sports Fan Shop");
INSERT INTO departments (department_name)
VALUES ("Sports & Fitness");
INSERT INTO departments (department_name)
VALUES ("Uniforms, Work & Safety");
INSERT INTO departments (department_name)
VALUES ("Women's Fashion");

-- intial product seeds
USE bamazon_db;
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUES ("Elastic Exercise Band", 4, 20.99, 150);
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUES ("Pet Hair Brushes", 11, 14.99, 35);
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUE ("Grill Matt", 10, 15.75, 200);
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUE ("Vegitable Spiralizer", 6, 24.95, 60 );
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUE ("Pet Nail Clipper", 11, 11.49, 78);
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUE ("Yoga Mat", 14, 14.10, 84);
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUE ("Bento Boxes", 6, 25.88, 30);
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUE ("Stainless Steel Straw", 4, 14.87, 110);
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUE ("Muscle Roller", 14, 10.99, 96) ;
INSERT INTO products (product_name,department_id,price,stock_quantity)
VALUE ("Compression Socks", 7, 18.95, 240);
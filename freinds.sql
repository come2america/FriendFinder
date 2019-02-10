CREATE database friendfinder;
use friendfinder;
CREATE TABLE products(
ID INTEGER AUTO_INCREMENT NOT NULL,
product_name TEXT NOT NULL,
department_name TEXT NOT NULL,
price TEXT NOT NULL,
stock_quantity INTEGER NOT NULL,
  PRIMARY KEY (ID)
	
);
INSERT INTO products (id, product_name , department_name , price , stock_quantity )
VALUES (1, "Black American Spirit Cartons", "Cigarrettes", 20, 10);
INSERT INTO products (product_name , department_name , price , stock_quantity )
VALUES ("2_for_1 Hurricane", "Alcohol", 3, 20); 
INSERT INTO products (product_name , department_name , price , stock_quantity )
VALUES ("Bang", "Energy_Drink ", 3, 60); 
INSERT INTO products (product_name , department_name , price , stock_quantity )
VALUES ("Gatorade", "Drink", 4, 200 );
 INSERT INTO products (product_name , department_name , price , stock_quantity )
VALUES ("Raisin_Bran", "Canned_Food ", 3, 100); 
INSERT INTO products (product_name , department_name , price , stock_quantity )
VALUES ("LA Rams Hat", "Sports Memorobilia", 3, 100); 
INSERT INTO products (product_name , department_name , price , stock_quantity )
VALUES ("Apple Headphones", "Accesories", 15, 50); 
INSERT INTO products (product_name , department_name , price , stock_quantity )
VALUES ("8ball Winning Scratches", "Lottery",5, 20); 
INSERT INTO products (product_name , department_name , price , stock_quantity )
VALUES ("Beef Jerky", "Food",3, 50);
INSERT INTO products (product_name , department_name , price , stock_quantity )
VALUES ("Gum", "Food ",3, 100);

select * from products;


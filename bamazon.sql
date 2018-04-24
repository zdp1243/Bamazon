DROP DATABASE IF EXISTS bamazon_db;
-- Create a database 
CREATE DATABASE bamazon_db;

-- Use programming db for the following statements --
USE bamazon_db;

CREATE TABLE Products (
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INTEGER (100) AUTO_INCREMENT NOT NULL,
item_id INTEGER (20),
  -- Create a string column called product name --
product_name VARCHAR (100),
  -- Create an integer column called "rating" --
department_name VARCHAR (100),
price DECIMAL (4,2),
stock_quantity INTEGER (200),
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary key
  PRIMARY KEY (id)
  );

  INSERT INTO Products (item_id, product_name, department_name, price, stock_quantity)
  VALUES (123456, "German Kaffee Mug", "Housewares", 10.99, 4), (678910, "German Tee Mug","Housewares", 10.99, 3), (198765, "Portmeirion Prisoner Mug--Be Seeing You", 25.00, 5),
  (54321, "Portmeirion French Coffee Press", "Housewares", 50.00, 7), (132465, "Denby Espresso Cup", "Housewares", 25.50, 6), (243546, "Denby Tea Mug", "Housewares", 30.00, 10), (576801, "Scraffito Coffee Pot", "Housewares", 100.00, 8),
  (089756, "Portmeirion Talisman Coffee Pot", "Housewares", 50.00, 7), (102938, "Portmeirion Coffee Set (20pc)", "Housewares", 50.00, 9),
  (675849, "Denby Cappuccino Cup", "Housewares",35.00, 10);
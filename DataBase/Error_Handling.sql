-- Create Warning
SELECT 
    DATE_SUB('2017-02-29', INTERVAL - 1 DAY) d1,
    DATE_SUB('2017-12-32', INTERVAL + 2 DAY) d2,
    DATE_SUB('2017-15-03', INTERVAL + 5 DAY) d3;
    
-- Invoking Warnings    
    SHOW WARNINGS;
    SHOW WARNINGS LIMIT 2;
    SHOW COUNT(*) WARNINGS;
    SELECT @@warning_count;

-- Create Error
SELECT id FROM products;

-- Invoking Errors
    SHOW ERRORS;
    SHOW COUNT(*) ERRORS;
    SELECT @@error_count;


-- When an order is placed, the inventory is automatically  updated to reflect  new updated stock
CREATE TABLE order_trigger(
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    quantity INT,
    order_date DATETIME,
    status ENUM('pending', 'completed', 'canceled')
);
 
CREATE TABLE inventory_trigger (
    product_id INT PRIMARY KEY,
    stock_quantity INT
);

-- Create Trigger
DELIMITER $$
CREATE TRIGGER after_order_insert
AFTER  INSERT ON  order_trigger
FOR EACH ROW
BEGIN
	DECLARE available_stock INT;
    SELECT stock_quantity INTO available_stock
    FROM inventory_trigger
    WHERE product_id = NEW.product_id;
     IF available_stock IS NOT NULL AND available_stock >= NEW.quantity THEN
		UPDATE  inventory_trigger
		SET  stock_quantity=stock_quantity-NEW.quantity
		WHERE  product_id=NEW.product_id;
     ELSE
		SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT= 'Insufficient stock for the product';
     END IF;
END $$
DELIMITER ;


-- Insert a new Inventory
INSERT INTO inventory_trigger (product_id, stock_quantity) VALUES (1, 56),(2, 78), (5, 0);

-- Insert a new order
INSERT INTO order_trigger(product_id, quantity, order_date, status)
values(1, 3, NOW(), 'pending');
INSERT INTO order_trigger(product_id, quantity, order_date, status)
values(2, 5, NOW(), 'pending');

-- Trigger Execution
select * from inventory_trigger;
select * from order_trigger;
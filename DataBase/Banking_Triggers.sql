CREATE DATABASE bankingdb;
use bankingdb;

CREATE TABLE customers(
custid INT AUTO_INCREMENT PRIMARY KEY,
cust_name VARCHAR(50),
registered_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
balance DECIMAL(10,2));

CREATE TABLE accounts(
accid INT AUTO_INCREMENT PRIMARY KEY,
custid INT,
acc_type ENUM('current','saving'),
acc_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
balance DECIMAL(10,2),
FOREIGN KEY (custid) REFERENCES customers(custid) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE operations(
operation_id INT AUTO_INCREMENT PRIMARY KEY,
accid INT,
ope_type VARCHAR(50),
ope_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
amount DECIMAL(10,2),
FOREIGN KEY (accid) REFERENCES accounts(accid) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE login(
logid INT AUTO_INCREMENT PRIMARY KEY,
operation_id INT,
log_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
status VARCHAR(50),
FOREIGN KEY (operation_id) REFERENCES operations(operation_id) ON UPDATE CASCADE ON DELETE CASCADE);


-- Create a trigger to register new customer in customers table.
-- for registering customer with initial balance 15000

DELIMITER $$
CREATE TRIGGER after_insert_customers
AFTER INSERT ON customer
FOR EACH ROW
BEGIN
	INSERT INTO accounts(custid,acc_type,acc_created,balance)
    VALUES(new.custid,'saving',NOW(),15000);
END $$
DELIMITER ;

-- Execution Trigger
INSERT INTO customer(cust_name,registered_date,balance)
VALUES('Ajinkya',NOW(),500);

-- Create Stored procedure to deposite interest into Accounts table in  accountid , interestrate
-- Check existing balance and update balance with caluclate interest based on interest set
-- amount transfer entry to be added into operation with status "interest"
DELEMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_deposite`(
IN p_accid INT,
IN p_intrest_rate DECIMAL(10,2))
BEGIN
	DECLARE existing_balance DECIMAL(10,2);
    DECLARE intrest DECIMAL(10,2);
    SELECT balance INTO existing_balance FROM accounts WHERE accid=p_accid;
    IF existing_balance IS NOT NULL THEN
		SET intrest = existing_balance * p_intrest_rate;
        
		UPDATE accounts 
        SET balnace = balance + intrest 
        WHERE accid = p_accid;
        
        INSERT INTO operations(accid,ope_type,ope_date,amount)
        VALUES(p_accid,'deposite',NOW(),intrest);
	ELSE
		SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT= 'NO Balance';
	END IF;
END
DELEMITER ;

-- Call stored procedure with accountid  and interest rate.
CALL sp_deposite(1,0.05);
SELECT * FROM operations;
SELECT * FROM customers;

-- insert new customer details into customers
-- insert new account entry into accounts table
-- insert new operation entury into operations table.
-- insert new  log entry into logs table
-- has context menu

DELIMITER $$ 
CREATE TRIGGER after_customers_insert
AFTER INSERT ON customers
FOR EACH ROW
BEGIN
	DECLARE new_acc_id INT;
    DECLARE new_operation_id INT;
    
    -- Insert New Customers Data
    INSERT INTO accounts(custid,acc_type,balance)
    VALUES();
    
    -- Insert New Accounts Data
    INSERT INTO accounts(custid,acc_type,acc_created,acc_created,balance)
    VALUES(NEW.custid,'saving',NOW(),15000);
    
    SET new_acc_id = LAST_INSERT_ID();
    
    INSERT INTO operations(accid,ope_type,ope_date,amount) 
    VALUES(new_acc_id,'deposite',NOW(),15000);
    
    set new_operation_id = LAST_INSERT_ID();
    
    INSERT INTO login(operation_id,log_time,status)
    VALUES(new_operation_id,NOW(),'completed');
END $$
DELIMITER ;

-- Executing Triggers
INSERT INTO customers(cust_name,registered_date,balance)VALUES('sanika',NOW(),1500.00);

SELECT * FROM customers WHERE cust_name = 'sanika';
SELECT * FROM accounts WHERE custid = 1;
SELECT * FROM operations WHERE accid = 1;
SELECT * FROM login WHERE operation_id = 1
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
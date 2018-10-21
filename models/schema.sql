DROP DATABASE IF EXISTS currency_db;
CREATE DATABASE currency_db;

-- To be used once data is imported from CSV file. 
UPDATE currencies
SET pair = concat("USD", pair);


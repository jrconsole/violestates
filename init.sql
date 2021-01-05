DROP TABLE IF EXISTS Properties;
CREATE TABLE IF NOT EXISTS Properties (
    id SERIAL PRIMARY KEY,
    price INTEGER NOT NULL,
    num_bed INTEGER NOT NULL,
    num_bath INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL
);

INSERT INTO Properties (price, num_bed, num_bath, name, address, city)
VALUES
(1200, 1, 1, 'My First Apartment', '123 Main St.', 'Dayton, OH'),
(2600, 2, 2, 'Our Apartment', '456 Grand Ave.', 'Columbus, OH');

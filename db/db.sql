CREATE DATABASE lunchdb;

CREATE TABLE lunchs(
    id SERIAL PRIMARY KEY,
    plate_name VARCHAR(255),
    plate_description TEXT,
    restaurant_name VARCHAR(255),
    category VARCHAR(255),
    price float,
    plate_image TEXT
)

INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Boneless', 'Chicken Boneless','Dennys', 'fast-food', 129, 'https://www.dennys.hn/Imagenes/CATEGORIAS/ENTRADAS/D3203.jpg');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('THE GRAND SLAM', 'Eggs, hotcakes and bacon', 'Dennys', 'breaskfast', 112, 'https://www.dennys.hn/Imagenes/CATEGORIAS/DESAYUNO/D0017.png');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('CHICKEN AND SHRIMP PASTA', 'Pasta Alfred sauce', 'Dennys', 'pasta', 112, 'https://www.dennys.hn/Imagenes/CATEGORIAS/DESAYUNO/D0017.png');

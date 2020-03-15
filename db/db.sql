CREATE DATABASE lunchdb;

CREATE TABLE lunchs(
    id SERIAL PRIMARY KEY,
    plate_name VARCHAR(255),
    restaurant_name VARCHAR(255),
    category VARCHAR(255),
    price float,
    plate_image VARCHAR(MAX)
)
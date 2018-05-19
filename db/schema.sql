DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
    id int auto_increment,
    burger_name varchar(250),
    devoured boolean default 0,
    PRIMARY KEY (id)
);

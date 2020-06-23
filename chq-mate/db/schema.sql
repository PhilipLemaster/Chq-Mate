-- DROP DATABASE chq_register;
CREATE DATABASE chq_register;
USE chq_register;
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    email CHAR(30) NOT NULL,
    pwd CHAR(20) NOT NULL,
    username CHAR(30) NOT NULL,
    tag CHAR(20) NOT NULL,
    console CHAR(20) NOT NULL,
    topgame1 CHAR(50) NOT NULL,
    topgame2 CHAR(50) NOT NULL,
    topgame3 CHAR(50) NOT NULL,
    topgenre1 CHAR(20) NOT NULL,
    topgenre2 CHAR(20) NOT NULL,
    topgenre3 CHAR(20) NOT NULL,
    casual BOOLEAN DEFAULT false,
    competitive BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);